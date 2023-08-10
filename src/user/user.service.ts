import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const data: Prisma.UserCreateInput = {
      ...createUserDto,
    };

    const userExists = await this.prisma.user.findUnique({
      where: { email: data.email },
    });

    if (userExists) {
      throw new HttpException('User already exists', HttpStatus.CONFLICT);
    }

    const createdUser = await this.prisma.user.create({ data });

    return {
      ...createdUser,
    };
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const userExists = await this.prisma.user.findUnique({
      where: { email: updateUserDto.email },
    });

    if (userExists && userExists.id !== id) {
      throw new HttpException(
        'User with this email already exists',
        HttpStatus.CONFLICT,
      );
    }

    const data: Prisma.UserUpdateInput = {
      ...updateUserDto,
    };

    const updatedUser = await this.prisma.user.update({
      where: { id },
      data,
    });

    return {
      ...updatedUser,
    };
  }
}
