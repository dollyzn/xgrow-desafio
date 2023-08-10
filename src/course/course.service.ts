import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { Course } from './entities/course.entity';

@Injectable()
export class CourseService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCourseDto: CreateCourseDto): Promise<Course> {
    const data: Prisma.CourseCreateInput = {
      ...createCourseDto,
    };

    const createdCourse = await this.prisma.course.create({ data });

    return {
      ...createdCourse,
    };
  }

  findAll() {
    return `This action returns all curso`;
  }

  findByUserId(id: number) {
    return this.prisma.course.findMany({
      where: {
        userId: id,
      },
    });
  }

  update(id: number, updateCourseDto: UpdateCourseDto) {
    return `This action updates a #${id} curso`;
  }

  remove(id: number) {
    return `This action removes a #${id} curso`;
  }
}
