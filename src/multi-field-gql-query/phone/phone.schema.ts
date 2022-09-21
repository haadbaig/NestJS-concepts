/* eslint-disable prettier/prettier */
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type PhoneDocument = Phone & Document;

@Schema({})
@ObjectType()
export class Phone {
  @Prop({unique: true})
  @Field(() => String)
  model: string;

  @Prop()
  @Field(() => Int)
  price: number;
}
export const PhoneSchema = SchemaFactory.createForClass(Phone);
