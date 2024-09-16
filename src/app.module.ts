import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { RestaurantsService } from './restaurants/restaurants.service';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { MenusController } from './menus/menus.controller';
import { MenusService } from './menus/menus.service';
import { MenusModule } from './menus/menus.module';
import { UsersController } from './users/users.controller';
import { RestaurantsController } from './restaurants/restaurants.controller';
import { UsersService } from './users/users.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'menu',
      entities: [],
      synchronize: true,
      logging: false,
    }),
    UsersModule,
    RestaurantsModule,
    MenusModule,
  ],
  controllers: [MenusController, UsersController, RestaurantsController],
  providers: [RestaurantsService, MenusService, UsersService],
})
export class AppModule {}
