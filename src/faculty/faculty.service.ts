import { Injectable } from '@nestjs/common';
import { CreateFacultyDto } from './dto/create-faculty.dto';
import { UpdateFacultyDto } from './dto/update-faculty.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class FacultyService {
  constructor(private readonly db: PrismaService) {}

  create(data: CreateFacultyDto) {
    const departments = data.departments.map((id) => ({ id }));
    return this.db.faculty.create({
      data: {
        ...data,
        departments: {
          connect: departments,
        },
      },
      include: {
        departments: { select: { id: true, name: true } },
      },
    });
  }

  findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.FacultyWhereUniqueInput;
    where?: Prisma.FacultyWhereInput;
    orderBy?: Prisma.FacultyOrderByWithRelationInput;
  }) {
    const { skip, take, cursor, where, orderBy } = params;
    return this.db.faculty.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      include: {
        departments: { select: { id: true, name: true } },
      },
    });
  }

  findOne(where: Prisma.FacultyWhereUniqueInput) {
    return this.db.faculty.findUnique({
      where,
      include: {
        departments: { select: { id: true, name: true } },
      },
    });
  }

  update(where: Prisma.FacultyWhereUniqueInput, data: UpdateFacultyDto) {
    const departments = data.departments.map((id) => ({ id }));
    return this.db.faculty.update({
      where,
      data: {
        ...data,
        departments: {
          connect: departments,
        },
      },
      include: {
        departments: { select: { id: true, name: true } },
      },
    });
  }

  remove(where: Prisma.FacultyWhereUniqueInput) {
    return this.db.faculty.delete({
      where,
      include: {
        departments: { select: { id: true, name: true } },
      },
    });
  }
}
