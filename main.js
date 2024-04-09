const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const morgan = require("morgan");
const knex = require("./db/knexConfig");
const redis = require('./db/redisClient')
const customErrorHandler = require('./utils/errorHandler')

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
app.use(helmet()); // Web vulnerability protection
app.use(compression()); // Response compression
app.use(morgan("dev")); // Logging
//TODO: Add rate limiter
//TODO: Add swagger api docs
//TODO: Add HTTPS redirection
//TODO: Security headers for CORS
//TODO: Content Security Policy for helmet
//TODO: Morgan Logging Strategy for production
//TODO: Testing and Validation see: express-validator
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

// Server functions
const checkDBConnection = async () => {
  try {
    await knex.raw("select 1+1 as result");
    console.log("MySQL database connection successful.");
  } catch (error) {
    console.error("MySQL database connection failed:", error);
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
      await knex.destroy();
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
