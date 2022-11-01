import { PartialType } from '@nestjs/mapped-types';
import { CreateCatssDto } from './create-catss.dto';

export class UpdateCatssDto extends PartialType(CreateCatssDto) {}
