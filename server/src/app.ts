import cors from 'cors';
import express from "express";
import router from "./routes/router";
import morgan from 'morgan';

const app = express();

app.use(cors());
app.use(morgan('combined'))
app.use(express.json());

app.use("/api", router);

export default app;
