import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Post('create')
  create(@Body() createCarDto: CreateCarDto) {
    return this.carsService.create(createCarDto);
  }

  @Get('get-all')
  findAll() {
    return this.carsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCarDto: UpdateCarDto) {
    return this.carsService.update(+id, updateCarDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carsService.remove(+id);
  }
}
