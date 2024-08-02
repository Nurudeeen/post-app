import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePostInput } from './dto/create-post.input';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreatePostInput) {
    try {
      return await this.prisma.post.create({ data });
    } catch (error) {
      throw new InternalServerErrorException('Failed to create post');
    }
  }

  async findAll() {
    return this.prisma.post.findMany();
  }

  async findOne(id: string) {
    const post = await this.prisma.post.findUnique({ where: { id } });
    if (!post) {
      throw new NotFoundException(`Post with ID "${id}" not found`);
    }
    return post;
  }

  async update(id: string, data: CreatePostInput) {
    const post = await this.findOne(id);
    try {
      return await this.prisma.post.update({
        where: { id: post.id },
        data,
      });
    } catch (error) {
      throw new InternalServerErrorException('Failed to update post');
    }
  }

  async remove(id: string) {
    const post = await this.findOne(id);
    try {
      return await this.prisma.post.delete({
        where: { id: post.id },
      });
    } catch (error) {
      throw new InternalServerErrorException('Failed to delete post');
    }
  }
}
