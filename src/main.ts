import express, {NextFunction, Request, Response} from 'express';
import {configDotenv} from "dotenv";
import router from "./router";
import "reflect-metadata"
import {AppDataSource} from "./data-source";
import {HttpError} from "./middleware/errorMiddleware";

configDotenv();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json())
app.use('/api', router);

app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
    const {code, message} = err
    res.status(code).json({message})
})


async function databaseStart() {
    const result = await AppDataSource.initialize()
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
    });
}

databaseStart()






