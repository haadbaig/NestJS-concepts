/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { UserResolver } from './user.resolver';
import { User, UserSchema } from './user.schema';
import { UsersService } from './user.service';

@Module({
  imports: [
    MongooseModule.forFeature([{
    name: User.name, 
    schema: UserSchema,
    }]),
  ],
  controllers: [UserController],
  providers: [UserResolver,UsersService, UserRepository],

})
export class UserModule {}
