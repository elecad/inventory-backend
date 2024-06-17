import express, { Request, Response } from 'express';
import {configDotenv} from "dotenv";

const app = express();
const port = 3000;

configDotenv();

console.log(process.env.PORT)

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, Express with TypeScript!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});