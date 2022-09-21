/* eslint-disable prettier/prettier */
import { ArgsType, Field, Int, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types} from 'mongoose';
import { Transform } from 'class-transformer';
import * as mongodb from 'mongodb'
import { Phone } from '../phone/phone.schema';

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

  @Prop({})
  @Field(()=>String, {nullable: true})
  name: string

  @Prop({ref: Phone.name, type: Types.ObjectId})
  @Field(()=>[Phone])
  phoneUsed: Phone[]

}

export const UserSchema = SchemaFactory.createForClass(User);