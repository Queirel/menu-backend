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
import { UsersEntity } from './users/users.entity';
import { RestaurantsEntity } from './restaurants/restaurants.entity';
import { MenusEntity } from './menus/menus.entity';
import { ConfigModule } from '@nestjs/config';
import { EnvConfig } from '../config/env.config';
import { JoiValidationSchema } from '../config/joi.validation';
import { CategoriesModule } from './categories/categories.module';
import { CategoriesController } from './categories/categories.controller';
import { CategoriesService } from './categories/categories.service';
import { CategoriesEntity } from './categories/categories.entity';
import { AuthModule } from './auth/auth.module';
import { FilesModule } from './files/files.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [EnvConfig],
      validationSchema: JoiValidationSchema,
    }),
    TypeOrmModule.forFeature([
      UsersEntity,
      RestaurantsEntity,
      MenusEntity,
      CategoriesEntity,
    ]),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: +process.env.POSTGRES_PORT,
      username: process.env.POSTGRES_USERNAME,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      logging: false,
      autoLoadEntities: true,
    }),
    UsersModule,
    RestaurantsModule,
    MenusModule,
    CategoriesModule,
    AuthModule,
    FilesModule,
  ],
  controllers: [
    CategoriesController,
    MenusController,
    UsersController,
    RestaurantsController,
  ],
  providers: [
    CategoriesService,
    RestaurantsService,
    MenusService,
    UsersService,
  ],
})
export class AppModule {}
