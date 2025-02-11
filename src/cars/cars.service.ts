import { HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Injectable()
export class CarsService {
  private todo: {
    id: number;
    name: string;
    model: string;
    photo: string;
  }[] = [];
  constructor(private readonly prismaService: PrismaService) {}

  async create(createCarDto: CreateCarDto) {
    const newData = {
      id: createCarDto.id,
      name: createCarDto.name,
      model: createCarDto.model,
      photo: createCarDto.photo,
    };
    await this.prismaService.car.create({
      data: newData,
    });
    return { status: HttpStatus.OK, newData };
  }

  async findAll() {
    return await this.prismaService.car.findMany();
  }

  async findOne(id: number) {
    return await this.prismaService.car.findUnique({ where: { id } });
  }

  async update(id: number, updateTodoDto: UpdateCarDto) {
    return await this.prismaService.car.update({
      where: { id },
      data: updateTodoDto,
    });
  }

  async remove(id: number) {
    return await this.prismaService.car.delete({ where: { id } });
  }
}
