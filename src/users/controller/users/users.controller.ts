import {
  Body,
  Controller,
  Get,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Post,
  Query,
  Req,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateUserDto } from 'src/users/dto/CreateUserData.dto';

@Controller('users')
export class UsersController {
  @Get()
  getUsers(@Query('sortDesc', ParseBoolPipe) sortDesc: boolean) {
    return {
      username: 'John',
      email: 'john@gmail,com',
      password: '123456',
    };
  }

  @Post()
  @UsePipes(new ValidationPipe())
  createUser(@Body() usersData: CreateUserDto) {
    console.log(usersData);
    return 'ok';
  }

  @Get(':id')
  getUserByid(@Param('id', ParseIntPipe) id: number) {
    console.log(id);
    return {
      id,
    };
  }
}
