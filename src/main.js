const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const morgan = require("morgan");
const { PrismaClient, $disconnect } = require("@prisma/client");
const customErrorHandler = require("./middleware/errorHandler");
const cookieParser = require("cookie-parser");
const fs = require('fs').promises;
require("dotenv").config();

// Variable Definitions
const PORT = process.env.PORT ?? 5050;
const CLIENT = process.env.CLIENT ?? "http://localhost:5173";

let server;
const app = express();

const allowedOrigins = [
  'http://localhost:5173',
  'https://your-production-domain.com'
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  optionsSuccessStatus: 200
};

// Middleware
app.use(cors(corsOptions));
app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());
app.use(helmet());
app.use(compression());
app.use(morgan("dev"));
//TODO: Add rate limiter
//TODO: Add swagger api docs
//TODO: Add HTTPS redirection
//TODO: Security headers for CORS
//TODO: Content Security Policy for helmet
//TODO: Morgan Logging Strategy for production
//TODO: Testing and Validation for CI/CD


// Routes
const missionRoutes = require("./routes/missions");
app.use("/v1/missions", missionRoutes);

const objectiveRoutes = require("./routes/objectives");
app.use("/v1/missions", objectiveRoutes);

const stageRoutes = require("./routes/stages");
app.use("/v1/missions", stageRoutes);

const typeRoutes = require("./routes/types");
app.use("/v1/types", typeRoutes);

const eclipseRoutes = require("./routes/eclipse")
app.use("/v1/eclipse", eclipseRoutes)

const authRoutes = require("./routes/auth")
const {setAsync} = require("./redis/redisUtils");
app.use("/v1/auth", authRoutes)


app.use(customErrorHandler);

// Server functions
const checkDBConnection = async () => {
  const prisma = new PrismaClient();
  try {
    await prisma.$queryRaw`SELECT 1+1 AS result`;
    console.log("Database connection successful.");
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1);
  }
};

const loadAuthData = async () => {
  try {
    const data = await fs.readFile("./public.pem", "utf8");
    await setAsync('publicKey', data);
    console.log('Public key loaded into Redis');
  } catch (err) {
    console.error('Failed to load public key into Redis', err);
  }
}

const gracefulShutdown = () => {
  console.log("Initiating graceful shutdown...");
  server.close(async (err) => {
    if (err) {
      console.error("Error during server shutdown:", err);
      process.exit(1);
    }
    try {
      await $disconnect();
      console.log("MySQL database connection successfully terminated.");
    } catch (error) {
      console.error("Error during MySQL database connection shutdown:", error);
    }
    console.log("Shutdown complete.");
    process.exit(0);
  });
};

const startServer = async () => {
  await checkDBConnection();
  server = app.listen(PORT, () =>
    console.log(`Server is running on port ${PORT}`),
  );
  await loadAuthData();
  return server;
};

process.on("SIGTERM", gracefulShutdown);
process.on("SIGINT", gracefulShutdown);
startServer().catch(console.error);
