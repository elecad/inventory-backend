import {NextFunction, Request, Response} from "express";
import {log} from "node:util";


export function Middleware1(functions: { (req: Request, res: Response): Promise<void> }[]) {
    return async (req: Request, res: Response, next: NextFunction) => {
        console.log(functions)
        console.log(123)
        for (const f of functions) {
            await f(req, res)
        }
        next()
    }
}