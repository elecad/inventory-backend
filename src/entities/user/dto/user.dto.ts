import {IsEmail, IsMobilePhone, IsNotEmpty} from "class-validator";

export class UserDto {
    @IsNotEmpty()
    surname: string;
    @IsNotEmpty()
    name: string;
    @IsNotEmpty()
    @IsMobilePhone("ru-RU")
    phone: string;
    @IsNotEmpty()
    @IsEmail()
    email: string;
    @IsNotEmpty()
    password: string;
}