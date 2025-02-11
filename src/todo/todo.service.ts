import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class TodoService {
  private todo: {
    id: number;
    title: string;
    image: string;
  }[] = [];
  constructor(private readonly prismaService: PrismaService) {}

  async create(createTodoDto: CreateTodoDto) {
    const newTodo = {
      id: createTodoDto.id,
      title: createTodoDto.title,
      image: createTodoDto.image,
    };
    await this.prismaService.todo.create({
      data: newTodo,
    });
    return { status: HttpStatus.OK, newTodo };
  }

  async findAll() {
    return await this.prismaService.todo.findMany();
  }

  async findOne(id: number) {
    return await this.prismaService.todo.findUnique({ where: { id } });
  }

  async update(id: number, updateTodoDto: UpdateTodoDto) {
    return await this.prismaService.todo.update({
      where: { id },
      data: updateTodoDto,
    });
  }

  async remove(id: number) {
    return await this.prismaService.todo.delete({ where: { id } });
  }
}
