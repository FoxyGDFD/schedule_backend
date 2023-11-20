import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsNotEmpty, IsString } from 'class-validator';
import { Department as Model } from '@prisma/client';

export class Department implements Model {
  @IsNumber()
  @IsNotEmpty()
  readonly id: number;
  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  name: string;
  @ApiProperty({ required: false })
  @IsNumber()
  facultyId: number;
}
