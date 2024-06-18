import {Router} from "express";
import UserController from "./entities/user/user.controller";
import {validateBodyMiddleware} from "./middleware/validateBodyMiddleware";
import {UserDto} from "./entities/user/dto/user.dto";
import {errorMiddleware} from "./middleware/errorMiddleware";
import {validateParamsMiddleware} from "./middleware/validateParamsMiddleware";
import {groupMiddleware} from "./middleware/groupMiddleware";


const router = Router()
router.post('/user', validateBodyMiddleware(UserDto), errorMiddleware(UserController.create))
router.get('/user/:id', validateParamsMiddleware('id'), errorMiddleware(UserController.get))
router.put('/user/:id', validateParamsMiddleware('id'), errorMiddleware(UserController.update))
router.put('/test/:id', groupMiddleware([validateParamsMiddleware('id'), validateBodyMiddleware(UserDto)]), errorMiddleware(UserController.test))
router.delete('/user/:id', validateParamsMiddleware('id'), errorMiddleware(UserController.remove))

export default router