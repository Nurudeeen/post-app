import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Post } from './models/post.model';
import { PostsService } from './posts.service';
import { CreatePostInput } from './dto/create-post.input';

@Resolver(() => Post)
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}

  @Query(() => [Post])
  async posts() {
    return this.postsService.findAll();
  }

  @Query(() => Post)
  async post(@Args('id', { type: () => String }) id: string) {
    return this.postsService.findOne(id);
  }

  @Mutation(() => Post)
  async createPost(@Args('createPost') createPost: CreatePostInput) {
    return this.postsService.create(createPost);
  }

  @Mutation(() => Post)
  async updatePost(
    @Args('id', { type: () => String }) id: string,
    @Args('updatePost') updatePost: CreatePostInput,
  ) {
    return this.postsService.update(id, updatePost);
  }

  @Mutation(() => Post)
  async deletePost(@Args('id', { type: () => String }) id: string) {
    return this.postsService.remove(id);
  }
}
