import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CatssService } from './catss.service';
import { CreateCatssDto } from './dto/create-catss.dto';
import { UpdateCatssDto } from './dto/update-catss.dto';

@Controller('catss')
export class CatssController {
  constructor(private readonly catssService: CatssService) {}

  @Post()
  create(@Body() createCatssDto: CreateCatssDto) {
    return this.catssService.create(createCatssDto);
  }

  @Get()
  findAll() {
    return this.catssService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.catssService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCatssDto: UpdateCatssDto) {
    return this.catssService.update(+id, updateCatssDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.catssService.remove(+id);
  }
}
