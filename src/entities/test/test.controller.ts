import { Request, Response } from 'express';

class TestController {
    static async create(req: Request, res: Response) {
        console.log("Запрос")
        res.sendStatus(200)
    }

}

export default TestController;