import { PartialType } from '@nestjs/swagger';
import { CreateCarDto } from './create-car.dto';

export class UpdateCarDto extends PartialType(CreateCarDto) {
  id: number;
  name: string;
  photo: string;
  model: string;
}
