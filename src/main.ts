import express, { Request, Response } from 'express';
import {configDotenv} from "dotenv";
import router from "./router";

const app = express();
const PORT = process.env.PORT || 3000;

configDotenv();

app.use('/api', router);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});