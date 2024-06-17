import {IsNotEmpty} from "class-validator";

export class CreateTestDto {
    @IsNotEmpty()
    name: string
    @IsNotEmpty()
    surname: string
    @IsNotEmpty()
    email: string
}