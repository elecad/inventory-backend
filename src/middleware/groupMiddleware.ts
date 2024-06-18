import {NextFunction, Request, Response} from "express";


export function groupMiddleware(functions: { (req: Request, res: Response, next: NextFunction): void } []) {
    return async (req: Request, res: Response, next: NextFunction) => {
        console.log(functions)
        for (const f of functions) {
            f(req, res, next)
        }
    }
}