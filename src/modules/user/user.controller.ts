/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post, Req, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
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
  @UseInterceptors(FileInterceptor('image'))
  async createUser (@UploadedFile() file: Express.Multer.File, 
    @Body() body
  ): Promise<User> {
    
    return this.usersService.createUser(body.email, body.age, file.buffer);
  }

}