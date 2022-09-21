/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PhoneModule } from '../phone/phone.module';
import { PhoneRepository } from '../phone/phone.repository';
import { PhoneService } from '../phone/phone.service';
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
    PhoneModule,
  ],
  controllers: [UserController],
  providers: [UserResolver, UsersService, UserRepository],

})
export class UserModule {}
