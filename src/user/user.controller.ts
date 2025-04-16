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

  // @Get(':id')
  // getUser(@Param('id') id: number): User | { message: String } {
  //   return this.userService.getUser(Number(id));
  // }
  
  @Get(':id')
  getUser(@Param('id') id: number): UserResponseDto | { message: String } {
    const getUser =  this.userService.getUser(Number(id));
    return new UserResponseDto(getUser)
  }

  // @Post()
  // createUser(@Body() userdto: CreateUserDto): User {
  //   return this.userService.createUser(userdto);

  // }
  @Post()
  createUser(@Body() userdto: CreateUserDto): UserResponseDto {
      const newUser =  this.userService.createUser(userdto);
      return  new UserResponseDto(newUser);
  } 

  // user.controller.ts
  @Put(':id') updateUser(@Param('id') id: number, @Body() updateDto: CreateUserDto,): UserResponseDto | { message: string } {
    const updateUser = this.userService.updateUser(Number(id), updateDto);
    return new UserResponseDto(updateUser);
  }
  @Patch(':id') partiallyupdateUser(@Param('id') id: Number, @Body() updateDto:Partial<UpdateUserDto>): UserResponseDto | { message: String } {
    const partialUpdate = this.userService.partiallyupdateUser(Number(id), updateDto);
    return new UserResponseDto(partialUpdate)
  }
  @Delete(':id') deleteUser(@Param('id') id: Number | { message: String } ){
    const deleteUser = this.userService.deleteUser(Number(id));
    return new UserResponseDto(deleteUser)
  }




}
