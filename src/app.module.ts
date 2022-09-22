/* eslint-disable prettier/prettier */
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    UserModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver,

      Upload: false,

      context: ({ req, res }) => ({ req, res }),

      playground: false,

      autoSchemaFile: true,

      include: [UserModule],

      subscriptions: {
        'graphql-ws': true,

        'subscriptions-transport-ws': true,
      },
    }),
    MongooseModule.forRoot('mongodb://localhost/nestjs-article'),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}