import { Module } from '@nestjs/common';
import { MenusController } from './menus.controller';
import { MenusService } from './menus.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MenusEntity } from './menus.entity';
import { RestaurantsEntity } from 'src/restaurants/restaurants.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MenusEntity, RestaurantsEntity])],
  providers: [MenusService],
  controllers: [MenusController],
})
export class MenusModule {}
