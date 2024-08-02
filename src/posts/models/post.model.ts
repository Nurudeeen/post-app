import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Post {
  @Field()
  id: string;

  @Field()
  title: string;

  @Field()
  content: string;

  @Field()
  imageUrl: string;

  @Field()
  likes: number;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}