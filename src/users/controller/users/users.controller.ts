import { Controller, Get } from '@nestjs/common';

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
}
