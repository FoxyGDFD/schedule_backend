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
import { FacultyService } from './faculty.service';
import { CreateFacultyDto } from './dto/create-faculty.dto';
import { UpdateFacultyDto } from './dto/update-faculty.dto';
import { Prisma } from '@prisma/client';
import {
  ApiTags,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiBody,
} from '@nestjs/swagger';
import { Faculty } from './entities/faculty.entity';

@ApiTags('Faculty')
@Controller('faculty')
export class FacultyController {
  constructor(private readonly facultyService: FacultyService) {}

  @Post()
  @ApiBody({ type: CreateFacultyDto })
  @ApiCreatedResponse({ type: Faculty })
  create(@Body() data: CreateFacultyDto) {
    return this.facultyService.create(data);
  }

  @ApiOkResponse({ type: Faculty })
  @Get()
  findAll(@Query() where: Prisma.FacultyWhereInput) {
    return this.facultyService.findAll({ where });
  }

  @ApiOkResponse({ type: Faculty })
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.facultyService.findOne({ id });
  }

  @Patch(':id')
  @ApiBody({ type: UpdateFacultyDto })
  @ApiOkResponse({ type: Faculty })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateFacultyDto,
  ) {
    return this.facultyService.update({ id }, data);
  }

  @ApiOkResponse({ type: Faculty })
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.facultyService.remove({ id });
  }
}
