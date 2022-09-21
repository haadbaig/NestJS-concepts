import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PhoneService } from './phone.service';
import { Phone } from './phone.schema';

@Resolver(() => Phone)
export class PhoneResolver {
  constructor(private readonly phoneService: PhoneService) {}

  @Mutation(() => Phone)
  createPhone(@Args('model') model: string, @Args('price') price: number) {
    return this.phoneService.create(model, price);
  }

  @Query(() => [Phone], { name: 'phone' })
  findAll() {
    return this.phoneService.find();
  }

  // @Query(() => Phone, { name: 'phone' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.phoneService.findOne(id);
  // }
  

}
