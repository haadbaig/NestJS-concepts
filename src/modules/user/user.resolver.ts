/* eslint-disable prettier/prettier */
import { Query } from '@nestjs/graphql';
import { Resolver } from '@nestjs/graphql';
import { User } from './user.schema';
import { UsersService } from './user.service';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UsersService) {}

  @Query(() => [User],{name:"user"})
  getUser() {
    return this.userService.getUsers();
  }
}
