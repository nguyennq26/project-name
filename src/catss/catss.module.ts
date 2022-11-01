import { Module } from '@nestjs/common';
import { CatssService } from './catss.service';
import { CatssController } from './catss.controller';

@Module({
  controllers: [CatssController],
  providers: [CatssService]
})
export class CatssModule {}
