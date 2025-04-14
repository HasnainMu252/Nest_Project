import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './createUserDto';

import { IsString, IsEmail, IsInt, Min, Max } from 'class-validator';

export class UpdateUserDto {
    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsInt()
    @Min(18)
    @Max(120)
    age: number;
  } 



