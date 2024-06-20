import {NextFunction, Request, Response} from 'express';
import {UserDto} from "./dto/user.dto";
import {AppDataSource} from "../../data-source";
import {User} from "./user.models";
import userService from "./user.service";
import {threadId} from "node:worker_threads";
import UserService from "./user.service";

class UserController {


    static async get(req: Request, res: Response) {
        console.log(123)
        const id = +req.params.id
        const result = await userService.getOrFail({where: {id}});
        res.json(result)
    }


    static async getAll(req: Request, res: Response) {
        const result = await userService.getAll({});
        res.json(result)
    }

    static async create(req: Request, res: Response) {
        const newUser = req.body as UserDto
        // @ts-ignore
        const user = await userService.create(newUser)
        res.status(201).json(user)


    }


    static async update(req: Request, res: Response) {
        const result = await UserService.update(+req.params.id, req.body)
        res.json(result)
    }


    static async remove(req: Request, res: Response) {
        const result = await UserService.remove(+req.params.id)
        res.sendStatus(201)
    }

    static async test(req: Request, res: Response) {
        console.log(123)
        res.sendStatus(205)
    }

}

export default UserController;