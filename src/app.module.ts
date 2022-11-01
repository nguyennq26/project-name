import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CatModule } from './cat/cat.module';
import { CatsService } from './cats/cats.service';
import { CatsModule } from './cats/cats.module';
import { CatssModule } from './catss/catss.module';

@Module({
  imports: [CatModule, CatsModule, CatssModule],
  controllers: [AppController, CatsController],
  providers: [AppService, CatsService],
})
export class AppModule {}
