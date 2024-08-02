import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { Post } from '@prisma/client';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  async create(createPostInput: CreatePostInput): Promise<Post> {
    return this.prisma.post.create({ data: createPostInput });
  }

  async findAll(): Promise<Post[]> {
    return this.prisma.post.findMany();
  }

  async findOne(id: string): Promise<Post | null> {
    const post = await this.prisma.post.findUnique({ where: { id } });
    if (!post) {
      throw new NotFoundException(`Post with ID "${id}" not found`);
    }
    return post;
  }

  async update(id: string, updatePostInput: UpdatePostInput): Promise<Post | null> {
    const post = await this.prisma.post.findUnique({ where: { id } });
    if (!post) {
      throw new NotFoundException(`Post with ID "${id}" not found`);
    }
    return this.prisma.post.update({
      where: { id },
      data: updatePostInput,
    });
  }

  async remove(id: string): Promise<Post | null> {
    const post = await this.prisma.post.findUnique({ where: { id } });
    if (!post) {
      throw new NotFoundException(`Post with ID "${id}" not found`);
    }
    return this.prisma.post.delete({ where: { id } });
  }
}
