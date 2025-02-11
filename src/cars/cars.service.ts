import { HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service'; // Убедитесь, что PrismaService импортируется корректно
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Injectable()
export class CarsService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createCarDto: CreateCarDto) {
    const newData = {
      id: createCarDto.id,
      name: createCarDto.name,
      model: createCarDto.model,
      photo: createCarDto.photo,
    };
    const newCar = await this.prismaService.cars.create({
      data: newData,
    });
    return { status: HttpStatus.OK, newCar };
  }

  async findAll() {
    return this.prismaService.cars.findMany();
  }

  async findOne(id: number) {
    return this.prismaService.cars.findUnique({ where: { id } });
  }

  async update(id: number, updateCarDto: UpdateCarDto) {
    return this.prismaService.cars.update({
      where: { id },
      data: updateCarDto,
    });
  }

  async remove(id: number) {
    return this.prismaService.cars.delete({ where: { id } });
  }
}
