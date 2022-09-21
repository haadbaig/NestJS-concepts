/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { User } from "./user.schema";
import { UsersService } from "./user.service";

@Controller('users')
export class UserController {
  constructor(
    private readonly usersService: UsersService,
  ) {}

  @Get('/')
  async getAllUsers(): Promise<User[]>{
    return await this.usersService.getUsers();
  }

  @Post('/')
  async createUser (@Body() user: any): Promise<User> {
    return this.usersService.createUser(user.email, user.age);
  }

}