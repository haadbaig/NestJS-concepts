/* eslint-disable prettier/prettier */
import { Args, Mutation, Query } from '@nestjs/graphql';
import { Resolver } from '@nestjs/graphql';
import { Blob } from 'buffer';
import { User } from './user.schema';
import { UsersService } from './user.service';
import { GraphQLUpload, FileUpload } from 'graphql-upload';
import { createWriteStream} from 'fs';
import fs from 'fs'


@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UsersService) {}

  @Query(() => [User],{name:"user"})
  getUser() {
    return this.userService.getUsers();
  }

  @Mutation(() => User, {name: 'CreateUser'})
  createUser(@Args('email') email: string, 
  @Args('age') age: number, 
  @Args({ name: 'file', type: () => GraphQLUpload })  file: FileUpload) {
    console.log(email, age);
    console.log(file)
    let readStream = file.createReadStream()
    let data = ''

  // set stream encoding to binary so chunks are kept in binary
    readStream.setEncoding('binary')
    readStream.once('error', err => {
      return console.log(err)
    })
    readStream.on('data', chunk => (data += chunk))
    readStream.on('end', () => {
      // If you need the binary data as a Buffer
      // create one from data chunks       
      console.log(Buffer.from(data, 'binary'))
      this.userService.createUser(email, age, Buffer.from(data, 'binary'))

    })
  }
}
