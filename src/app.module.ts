import { Module } from '@nestjs/common';
import { FacultyModule } from './faculty/faculty.module';
import { DepartmentModule } from './department/department.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [FacultyModule, DepartmentModule, PrismaModule],
  controllers: [],
})
export class AppModule {}
