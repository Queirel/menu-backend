import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity } from './users.entity';
import { RestaurantsEntity } from 'src/restaurants/restaurants.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UsersEntity, RestaurantsEntity])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
