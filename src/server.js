import mongoose from "mongoose";
import app from "./app.js";
import config from "./app/config/index.js";

async function main() {
  try {
    console.log("Connecting to MongoDB");

    await mongoose.connect(config.database_url);
    console.log("Connected to MongoDB");
    app.listen(config.port, () => {
      console.log(`Server running at port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}
main();
