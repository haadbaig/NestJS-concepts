/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { PhoneService } from "../phone/phone.service";
import { User, UserDocument } from "./user.schema";

@Injectable()
export class UserRepository{
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private readonly phoneService: PhoneService
  ){ }

  async create(email, age, name): Promise<User> {
    const phoneUsed = (await this.phoneService.find()).slice(0,3);
    const u = await this.userModel.create({
      email,
      age,
      name,
      phoneUsed
    });
    u.save(); 
    return u;
  }

  async find(){
    return this.userModel.find();
  }
  
  async deleteByEmail(email:string) : Promise<any> {
    console.log("deleteByEmail")
    return await this.userModel.deleteMany({email:email})
  }

  async findWithMultipleFields (fields: any, value: any): Promise<UserDocument[]> {
    const result =  value.reduce(function(result, field, index) {
      result[fields[index]] = field;
      return result;
    }, {})
    return await this.userModel.find(result);
  }

}