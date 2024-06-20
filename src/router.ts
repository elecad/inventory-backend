import {Request, Response, Router} from "express";
import UserController from "./entities/user/user.controller";
import {validateBodyMiddleware} from "./middlewares/middleware/validateBodyMiddleware";
import {UserDto} from "./entities/user/dto/user.dto";
import {errorMiddleware} from "./middlewares/middleware/errorMiddleware";
import {validateParamsMiddleware} from "./middlewares/middleware/validateParamsMiddleware";
import {Middleware1} from "./middlewares/Middleware";
import {log} from "node:util";


const router = Router()
router.post('/user', errorMiddleware(UserController.create))
router.get('/user/:id', errorMiddleware(UserController.get))
router.put('/user/:id', errorMiddleware(UserController.update))
router.put('/test/:id', (req: Request, res: Response) => {
    console.log(123)
    res.status(200).send("123")
})
router.delete('/user/:id', errorMiddleware(UserController.remove))

export default router