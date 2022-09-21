import { Injectable } from '@nestjs/common';
import { PhoneRepository } from './phone.repository';
import { Phone } from './phone.schema';

@Injectable()
export class PhoneService {
  constructor(private readonly phoneRepository: PhoneRepository) {}

  async create(model: string, price: number) {
    return await this.phoneRepository.create(model, price);
  }

  async find(): Promise<Phone[]> {
    return await this.phoneRepository.find();
  }
}
