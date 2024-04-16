const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const morgan = require("morgan");
const { PrismaClient, $disconnect } = require("@prisma/client");
const redis = require("./db/redisClient");
const customErrorHandler = require("./utils/errorHandler");

require("dotenv").config();

// Variable Definitions
const PORT = process.env.PORT ?? 8080;
const CLIENT = process.env.CLIENT ?? "http://localhost:5173";

let server;
const app = express();

// Middleware
app.use(cors({ origin: CLIENT }));
app.use(express.static("public"));
app.use(express.json());
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
app.use(customErrorHandler);

// Routes
const missionRoutes = require("./routes/missions");
app.use("/api/missions", missionRoutes);

const objectiveRoutes = require("./routes/objectives");
app.use("/api/missions", objectiveRoutes);

const stageRoutes = require("./routes/stages");
app.use("/api/missions", stageRoutes);

const typeRoutes = require("./routes/types");
app.use("/api/types", typeRoutes);

const eclipseRoutes = require("./routes/eclipse")
app.use("/api/eclipse", eclipseRoutes)

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
  return server;
};

process.on("SIGTERM", gracefulShutdown);
process.on("SIGINT", gracefulShutdown);
startServer().catch(console.error);
