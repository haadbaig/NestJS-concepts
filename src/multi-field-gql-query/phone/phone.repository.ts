/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Phone, PhoneDocument } from './phone.schema';

@Injectable()
export class PhoneRepository {
  constructor(
    @InjectModel(Phone.name) private phoneModel: Model<PhoneDocument>,
  ) {}

  async create(model: string, price: number): Promise<Phone> {
    return await this.phoneModel.create({
      model,
      price,
    });
  }

  async find() : Promise<Phone[]>{
    return this.phoneModel.find({});
  }
}