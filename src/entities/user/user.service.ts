import {AppDataSource} from "../../data-source";
import {User} from "./user.models";
import {FindOneOptions} from "typeorm/find-options/FindOneOptions";
import {FindManyOptions} from "typeorm";
import {HttpError} from "../../middlewares/middleware/errorMiddleware";

class UserService {
    static async get(option: FindOneOptions) {
        const userRepository = AppDataSource.getRepository(User)
        return await userRepository.findOne(option)
    }

    static async getOrFail(option: FindOneOptions) {
        const userRepository = AppDataSource.getRepository(User)
        const user = await userRepository.findOne(option)
        if (!user) {
            throw new HttpError({code: 404, message: "Не найдено"})
        }
        return user
    }


    static async getAll(option: FindManyOptions) {
        const userRepository = AppDataSource.getRepository(User)
        return await userRepository.find(option)
    }

    static async create(newUser: Omit<User, 'id' | 'deletedAt'>) {
        const userRepository = AppDataSource.getRepository(User)

        const user = await this.get({where: {email: newUser.email}})
        if (user) {
            throw new HttpError({code: 422, message: "Пользователь с таким email уже есть"})
        }
        const newInstance = userRepository.create(newUser)
        return await userRepository.save(newInstance)
    }

    static async update(id: number, updateData: Partial<User>) {
        const userRepository = AppDataSource.getRepository(User)
        const user = await this.getOrFail({where: {id}})
        const userWitchEmail = await this.get({where: {email: updateData.email}})
        if (userWitchEmail) {
            throw new HttpError({code: 422, message: "Пользователь с таким email уже есть"})
        }
        const updatedUser = Object.assign(user, updateData)
        return await userRepository.save(updatedUser)
    }

    static async remove(id: number) {
        const userRepository = AppDataSource.getRepository(User)
        const user = await this.getOrFail({where: {id}})
        return await userRepository.softRemove(user)
    }
}

export default UserService;