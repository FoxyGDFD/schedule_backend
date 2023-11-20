import { Type } from 'class-transformer';
import { IsString, IsNumber, IsArray, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Faculty } from '@prisma/client';

export class UpdateFacultyDto implements Partial<Faculty> {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;
  @ApiProperty({ type: Number, isArray: true })
  @Type(() => Number)
  @IsArray()
  @IsNumber({}, { each: true })
  departments: number[];
}
