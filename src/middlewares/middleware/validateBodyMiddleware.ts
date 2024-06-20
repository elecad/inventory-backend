import {ClassConstructor, plainToInstance} from "class-transformer";
import {validate} from "class-validator";
import {HttpError} from "./errorMiddleware";
import {Request, Response} from "express";


export function validateBodyMiddleware(validateClass: ClassConstructor<object>) {
    return async (req: Request, res: Response) => {
        const instance = plainToInstance(validateClass, req.body);
        const valid = await validate(instance)
        if (valid.length) {
            const constrains = []
            for (const el of valid) {
                for (const key in el.constraints) {
                    constrains.push(`Поле ${el.property} не удовлетворяет ограничению ${key}`);
                }
            }
            throw new HttpError({code: 422, message: "validation-error"})
        }
    }

}