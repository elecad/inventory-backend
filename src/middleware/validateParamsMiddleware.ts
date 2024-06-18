import {NextFunction, Request, Response} from "express";
import validator from 'validator';


export function validateParamsMiddleware(name: string) {
    return async (req: Request, res: Response, next: NextFunction) => {
        const valid = validator.isNumeric(req.params[name])

        if (valid) {
            next()
        } else {
            res.status(422).json({
                message: "Параметр id должен быть числом",
            })
        }
    }
}