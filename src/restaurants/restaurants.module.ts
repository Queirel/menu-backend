import { Module } from '@nestjs/common';
import { RestaurantsController } from './restaurants.controller';
import { RestaurantsService } from './restaurants.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestaurantsEntity } from './restaurants.entity';
import { MenusEntity } from 'src/menus/menus.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RestaurantsEntity, MenusEntity])],
  controllers: [RestaurantsController],
  providers: [RestaurantsService],
})
export class RestaurantsModule {}
