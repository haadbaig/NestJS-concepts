/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";
import { User, UserDocument } from "./user.schema";

@Injectable()
export class UserRepository{
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
  ){ }

  async create(email, age): Promise<User> {
    const u = await this.userModel.create({
      email,
      age,
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

}