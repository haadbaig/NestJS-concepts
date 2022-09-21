import { Module } from '@nestjs/common';
import { PhoneService } from './phone.service';
import { PhoneResolver } from './phone.resolver';
import { PhoneRepository } from './phone.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Phone, PhoneSchema } from './phone.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Phone.name,
        schema: PhoneSchema,
      },
    ]),
  ],
  providers: [PhoneResolver, PhoneService, PhoneRepository],
  exports: [PhoneService]
})
export class PhoneModule {}
