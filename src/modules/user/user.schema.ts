/* eslint-disable prettier/prettier */
import { ArgsType, Field, Int, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document} from 'mongoose';
import { Transform } from 'class-transformer';
import * as mongodb from 'mongodb'

export type UserDocument = User & Document;

@ArgsType()
@Schema({
})
@ObjectType()
export class User {
  
  @Prop()
  @Field(() => String)
  email: string;

  @Prop()
  @Field( () => Int)
  age: number;
}

export const UserSchema = SchemaFactory.createForClass(User);