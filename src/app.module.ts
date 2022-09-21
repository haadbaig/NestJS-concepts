import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './multi-field-gql-query/user/user.module';
import { PhoneModule } from './multi-field-gql-query/phone/phone.module';

@Module({
  imports: [
    PhoneModule,
    UserModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,

      context: ({ req, res }) => ({ req, res }),

      playground: false,

      autoSchemaFile: true,

      include: [UserModule, PhoneModule],

      subscriptions: {
        'graphql-ws': true,

        'subscriptions-transport-ws': true,
      },
    }),
    MongooseModule.forRoot('mongodb://localhost/nestjs-article'),
  ],
})
export class AppModule {}
