/* eslint-disable prettier/prettier */
import { Args, Query } from '@nestjs/graphql';
import { Resolver } from '@nestjs/graphql';
import { User, UserDocument } from './user.schema';
import { UsersService } from './user.service';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UsersService) {}

  @Query(() => [User],{name:"user"})
  getUser() {
    return this.userService.getUsers();
  }

  @Query(() => [User], {name: "FindWithMultipleFields"})
  findWithMultipleFields (
    @Args('fields', { type: () => [String]} ) fields: any, 
    @Args('values', { type: () => [[String]]} ) values: any) {
    return this.userService.findWithMultipleFields(fields, values);
  }
}
