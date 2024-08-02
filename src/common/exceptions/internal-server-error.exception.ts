import { InternalServerErrorException } from '@nestjs/common';

export class CreatePostFailedException extends InternalServerErrorException {
  constructor() {
    super('Failed to create post');
  }
}
