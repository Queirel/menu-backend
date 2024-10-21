import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FoodsEntity } from './foods.entity';
import { FoodsService } from './foods.service';
import { FoodsController } from './foods.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    AuthModule,
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
