import { ApiProperty } from '@nestjs/swagger';
import { Department } from '@prisma/client';
import { Type } from 'class-transformer';
import { IsNumber, IsArray, IsNotEmpty, IsString } from 'class-validator';
import { Department as DepartmentModel } from 'src/department/entities/department.entity';

export class Faculty {
  @ApiProperty({ required: true })
  @IsNumber()
  @IsNotEmpty()
  readonly id: number;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;
  @ApiProperty({ type: [DepartmentModel] })
  @Type(() => DepartmentModel)
  @IsArray()
  departments: Department[];
}
