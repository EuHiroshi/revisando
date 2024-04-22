import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsModule } from './cats/cats.module';

@Module({
  controllers: [],
  providers: [],
  exports: [],
  imports: [MongooseModule.forRoot('mongodb://0.0.0.0/cats'), CatsModule],
})
export class AppModule {}
