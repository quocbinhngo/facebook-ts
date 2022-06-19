import config from "config";
import mongoose from "mongoose";
import logger from "./logger.util";

const MONGO_URI = config.get<string>("MONGO_URI");

const mongo = {
  connectDatabase: async () => {
    try {
      await mongoose.connect(MONGO_URI);
      logger.info("Connect to the database successfully");
    } catch (error: any) {
      logger.error(`Cannot connect to the database: ${error.message}`);
    }
  },
};

export default mongo;
