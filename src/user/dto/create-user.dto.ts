import { Prisma } from '@prisma/client';
import { User } from '../entities/user.entity';
import { IsEmail, IsOptional, IsString } from 'class-validator';

export class CreateUserDto extends User {
  @IsEmail()
  email: string;

  @IsString()
  name: string;

  @IsOptional()
  courses?: Prisma.CourseUncheckedCreateNestedManyWithoutUserInput;
}
