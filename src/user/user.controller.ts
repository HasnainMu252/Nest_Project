import { Controller, Get, Param, Post, Body, Put, Patch, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.interface';

import { UpdateUserDto } from './dto/updateDto';
import { CreateUserDto } from './dto/createUserDto';
import { UserResponseDto } from './dto/responseDto';

@Controller('user')
export class UserController {
  users: any;
  constructor(private readonly userService: UserService) { }

  @Get(':id')
  getUser(@Param('id') id: number): User | { message: String } {
    return this.userService.getUser(Number(id));
  }

  @Post()
  createUser(@Body() userdto: CreateUserDto): User {
    return this.userService.createUser(userdto);

  }
  // @Post()
  // createUser(@Body() userdto: CreateUserDto): User {
  //     const newUser =  this.userService.createUser(userdto);
  //     return new UserResponseDto(newUser);
  // }

  // user.controller.ts
  @Put(':id') updateUser(@Param('id') id: number, @Body() updateDto: CreateUserDto,): User | { message: string } {
    return this.userService.updateUser(Number(id), updateDto);
  }
  @Patch(':id') partiallyupdateUser(@Param('id') id: Number, @Body() updateDto:Partial<UpdateUserDto>): User | { message: String } {
    return this.userService.partiallyupdateUser(Number(id), updateDto);
  }
  @Delete(':id') deleteUser(@Param('id') id: Number | { message: String } ){
    return this.userService.deleteUser(Number(id));
  }




}
