import { ApiProperty } from '@nestjs/swagger/dist';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateDepartmentDto {
  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  name: string;
}
