/* eslint-disable prettier/prettier */
import { ArgsType, Field, Float, Int, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document} from 'mongoose';
import { Blob } from 'buffer';
import { Stream } from 'stream';
import { GraphQLUpload, FileUpload } from 'graphql-upload';


export type UserDocument = User & Document;
@ArgsType()
@Schema({
})
@ObjectType()
export class User {
  
  @Prop()
  @Field(() => String, {nullable: true})
  email: string;

  @Prop()
  @Field( () => Int, {nullable: true})
  age: number;

  @Prop({type: Buffer})
  @Field(() => GraphQLUpload,{nullable: true})
  image: FileUpload

}

export const UserSchema = SchemaFactory.createForClass(User);