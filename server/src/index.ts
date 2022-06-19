import config from "config";
import http from "http";

import app from "./app";
import logger from "./utils/logger.util";
import mongo from "./utils/mongo.util";

const PORT = config.get<number>("PORT");

const server = http.createServer(app);

async function startServer() {
  await mongo.connectDatabase();
  server.listen(PORT, () => logger.info(`Listening on PORT ${PORT}`));
}

startServer();
