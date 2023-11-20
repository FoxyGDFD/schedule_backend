import { ApiProperty } from '@nestjs/swagger/dist';
import { IsString, IsNotEmpty } from 'class-validator';

export class UpdateDepartmentDto {
  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  name: string;
}
