import { Type } from "class-transformer";
import { IsEmail, IsOptional, IsInt,IsString } from "class-validator";

export class AddressDto{
    @IsString()
    street:string;

    @IsString()
    city:string;

    @IsString()
    postalCode:string;

}

export class CreateUserDto{
    @IsString()
    name:string;

    @IsEmail()
    email:string;

    @IsInt()
    age:number;


    @IsOptional()
    @Type(()=> AddressDto)
    address?: AddressDto
}