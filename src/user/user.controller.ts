import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.interface';
import { UpdateUserDto } from './update-user.dto';
import { CreateUserDto } from './dto/createUserDto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get(':id')
    getUser(@Param('id') id: number): User | { message: String } {
        return this.userService.getUser(Number(id));
    }
    @Post()
    createUser(@Body() userdto: CreateUserDto): User {
        return this.userService.createUser(userdto);
    }

 // user.controller.ts
@Put(':id')
updateUser(
  @Param('id') id: number,
  @Body() updateDto: CreateUserDto,
): User | { message: string } {
  return this.userService.updateUser(Number(id), updateDto);
}


}
