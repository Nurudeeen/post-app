import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Post } from './models/post.model';
import { PostsService } from './posts.service';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { NotFoundException, InternalServerErrorException } from '@nestjs/common';

@Resolver(() => Post)
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}

  @Query(() => [Post])
  async posts() {
    try {
      return await this.postsService.findAll();
    } catch (error) {
      throw new InternalServerErrorException('Failed to fetch posts');
    }
  }

  @Query(() => Post, { nullable: true })
  async post(@Args('id', { type: () => String }) id: string) {
    try {
      const post = await this.postsService.findOne(id);
      return post;
    } catch (error) {
      if (error instanceof NotFoundException) {
        return null;
      }
      throw new InternalServerErrorException('Failed to fetch the post');
    }
  }

  @Mutation(() => Post)
  async createPost(@Args('createPostInput') createPostInput: CreatePostInput) {
    try {
      return await this.postsService.create(createPostInput);
    } catch (error) {
      throw new InternalServerErrorException('Failed to create the post');
    }
  }

  @Mutation(() => Post)
  async updatePost(
    @Args('id', { type: () => String }) id: string,
    @Args('updatePostInput') updatePostInput: UpdatePostInput,
  ) {
    try {
      const post = await this.postsService.update(id, updatePostInput);
      return post;
    } catch (error) {
      if (error instanceof NotFoundException) {
        return null;
      }
      throw new InternalServerErrorException('Failed to update the post');
    }
  }

  @Mutation(() => Post)
  async deletePost(@Args('id', { type: () => String }) id: string) {
    try {
      const post = await this.postsService.remove(id);
      return post;
    } catch (error) {
      if (error instanceof NotFoundException) {
        return null;
      }
      throw new InternalServerErrorException('Failed to delete the post');
    }
  }
}
