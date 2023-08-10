import { Prisma } from '@prisma/client';
import { Course } from '../entities/course.entity';
import { IsString, IsFQDN, IsNumber, IsOptional } from 'class-validator';

export class CreateCourseDto extends Course {
  @IsOptional()
  @IsString()
  photo?: string;

  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  category: string;

  @IsString()
  type: string;

  @IsFQDN()
  accessLink: string;

  @IsFQDN()
  supportLink: string;

  @IsNumber()
  userId: number;

  @IsOptional()
  user: Prisma.UserCreateNestedOneWithoutCoursesInput;
}
