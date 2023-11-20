import { Injectable } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class DepartmentService {
  constructor(private readonly db: PrismaService) {}

  create(data: CreateDepartmentDto) {
    return this.db.department.create({ data });
  }

  findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.DepartmentWhereUniqueInput;
    where?: Prisma.DepartmentWhereInput;
    orderBy?: Prisma.DepartmentOrderByWithRelationInput;
  }) {
    const { skip, take, cursor, where, orderBy } = params;
    return this.db.department.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  findOne(where: Prisma.DepartmentWhereUniqueInput) {
    return this.db.department.findUnique({
      where,
    });
  }

  update(where: Prisma.DepartmentWhereUniqueInput, data: UpdateDepartmentDto) {
    return this.db.department.update({
      where,
      data,
    });
  }

  remove(where: Prisma.DepartmentWhereUniqueInput) {
    return this.db.department.delete({ where });
  }
}
