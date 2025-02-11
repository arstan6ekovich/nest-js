import { HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
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
    const newCar = await this.prismaService.car.create({
      // 👈 Изменено с `cars` на `car`
      data: newData,
    });
    return { status: HttpStatus.OK, newCar };
  }

  async findAll() {
    return this.prismaService.car.findMany();
  }

  async findOne(id: number) {
    return this.prismaService.car.findUnique({ where: { id } }); // 👈 Изменено с `cars` на `car`
  }

  async update(id: number, updateCarDto: UpdateCarDto) {
    return this.prismaService.car.update({
      where: { id },
      data: updateCarDto,
    });
  }

  async remove(id: number) {
    return this.prismaService.car.delete({ where: { id } }); // 👈 Изменено с `cars` на `car`
  }
}
