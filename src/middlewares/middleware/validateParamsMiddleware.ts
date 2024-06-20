import {NextFunction, Request, Response} from "express";
import validator from 'validator';
import {HttpError} from "./errorMiddleware";


export function validateParamsMiddleware(name: string) {
    return async (req: Request, res: Response) => {
        const valid = validator.isNumeric(req.params[name])
        if (!valid) {
            throw new HttpError({code: 422, message: 'Параметр id должен быть числом'});
        }
    }
}