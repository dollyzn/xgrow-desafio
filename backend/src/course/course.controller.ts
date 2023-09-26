import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { CourseService } from './course.service';
import { CreateCourseDto } from './dto/create-course.dto';

@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Post()
  create(@Body() createCourseDto: CreateCourseDto) {
    return this.courseService.create(createCourseDto);
  }

  @Get()
  findMany(@Query() queryParams: Record<string, any>) {
    return this.courseService.findMany(queryParams);
  }

  @Get('user/:id/')
  findByUserId(@Param('id') id: string) {
    return this.courseService.findByUserId(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.courseService.remove(+id);
  }
}
