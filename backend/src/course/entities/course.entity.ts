import { Prisma } from '@prisma/client';

export class Course implements Prisma.CourseUncheckedCreateInput {
  id?: number;
  photo?: string;
  name: string;
  description: string;
  category: string;
  type: string;
  accessLink: string;
  supportLink: string;
  userId: number;
}
