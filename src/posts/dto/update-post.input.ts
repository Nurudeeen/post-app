import { InputType, Field } from '@nestjs/graphql';
import { IsOptional, IsString, IsUrl } from 'class-validator';

@InputType()
export class UpdatePostInput {
  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  title?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  content?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsUrl()
  imageUrl?: string;
}
