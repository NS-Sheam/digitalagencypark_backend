import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import config from "./config/index.js";
import app from "./app.js";

async function main() {
  console.log("Connecting to MongoDB");

  await mongoose.connect(config.database_url);
  console.log("Connected to MongoDB");
  app.listen(config.port, () => {
    console.log(`Server running at port ${config.port}`);
  });
}
main();
