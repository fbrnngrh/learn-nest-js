import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateUserDto } from 'src/users/dto/CreateUserData.dto';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return {
      username: 'John',
      email: 'john@gmail,com',
      password: '123456',
    };
  }

  @Post()
  createUser(@Body() usersData: CreateUserDto) {
    console.log(usersData);
    return 'ok';
  }
}
