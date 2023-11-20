import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { DepartmentService } from './department.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { Prisma } from '@prisma/client';
import {
  ApiTags,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiBody,
} from '@nestjs/swagger';
import { Department } from './entities/department.entity';

@ApiTags('Department')
@Controller('department')
export class DepartmentController {
  constructor(private readonly depatmentService: DepartmentService) {}

  @Post()
  @ApiBody({ type: CreateDepartmentDto })
  @ApiCreatedResponse({ type: Department })
  create(@Body() data: CreateDepartmentDto) {
    return this.depatmentService.create(data);
  }

  @ApiOkResponse({ type: Department })
  @Get()
  findAll(@Query() where: Prisma.DepartmentWhereInput) {
    return this.depatmentService.findAll({ where });
  }

  @ApiOkResponse({ type: Department })
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.depatmentService.findOne({ id });
  }

  @Patch(':id')
  @ApiBody({ type: UpdateDepartmentDto })
  @ApiOkResponse({ type: Department })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateDepartmentDto,
  ) {
    return this.depatmentService.update({ id }, data);
  }

  @ApiOkResponse({ type: Department })
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.depatmentService.remove({ id });
  }
}
