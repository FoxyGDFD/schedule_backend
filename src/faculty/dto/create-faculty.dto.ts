import { Type } from 'class-transformer';
import { IsString, IsNumber, IsArray, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateFacultyDto {
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
