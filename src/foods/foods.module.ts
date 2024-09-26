import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FoodsEntity } from './foods.entity';
import { FoodsService } from './foods.service';
import { FoodsController } from './foods.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      FoodsEntity,
      // MenusEntity,
      // RestaurantsEntity,
    ]),
  ],
  providers: [FoodsService],
  controllers: [FoodsController],
})
export class CategoriesModule {}
