import { Injectable } from '@nestjs/common';
import { CreateCatssDto } from './dto/create-catss.dto';
import { UpdateCatssDto } from './dto/update-catss.dto';

@Injectable()
export class CatssService {
  create(createCatssDto: CreateCatssDto) {
    return 'This action adds a new catss';
  }

  findAll() {
    return `This action returns all catss`;
  }

  findOne(id: number) {
    return `This action returns a #${id} catss`;
  }

  update(id: number, updateCatssDto: UpdateCatssDto) {
    return `This action updates a #${id} catss`;
  }

  remove(id: number) {
    return `This action removes a #${id} catss`;
  }
}
