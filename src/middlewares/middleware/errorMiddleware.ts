import {NextFunction, Request, Response} from "express";

export class HttpError extends Error {
    message = ''
    code = 500

    constructor({message, code}: { message: string, code: number }) {
        super(message)
        this.message = message
        this.code = code
    }
}

export function errorMiddleware(handler: (req: Request, res: Response) => void) {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await handler(req, res);
        } catch (e) {
            next(e)
        }
    };
}