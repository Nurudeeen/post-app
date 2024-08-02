import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { GraphqlModule } from './graphql/graphql.module';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [
    PrismaModule,
    GraphqlModule,
    PostsModule,
  ],
})
export class AppModule {}
