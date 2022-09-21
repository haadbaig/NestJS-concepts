/* eslint-disable prettier/prettier */
import { User, UserDocument } from "./user.schema";

import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { UserRepository } from "./user.repository";

@Injectable()
export class UsersService {
	constructor(
		private readonly userRepository: UserRepository
	) {}


	async getUsers() : Promise<User[]> {
		return await this.userRepository.find();

	}

	async createUser(email: string, age: number, name: string): Promise<User> {
		return await this.userRepository.create(email, age, name);
	}

	async findWithMultipleFields (fields: any, values: any): Promise<UserDocument[]> {
		return await this.userRepository.findWithMultipleFields(fields, values)
	}
}