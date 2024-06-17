import {Router} from "express";
import TestController from "./entities/test/test.controller";


const router = Router()

router.get('/test', TestController.create)

export default router