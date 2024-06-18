import {NextFunction, Request, Response} from "express";
import {ClassConstructor, plainToInstance} from "class-transformer";
import {validate} from "class-validator";


export function validateBodyMiddleware(validateClass: ClassConstructor<object>) {
    return async (req: Request, res: Response, next: NextFunction) => {
        const instance = plainToInstance(validateClass, req.body);
        const valid = await validate(instance)
        if (valid.length) {
            const constrains = []
            for (const el of valid) {
                for (const key in el.constraints) {
                    constrains.push(`Поле ${el.property} не удовлетворяет ограничению ${key}`);
                }
            }
            res.status(422).json({
                message: "validation-error",
                constrains
            })
        } else {
            next()
        }
    }
}