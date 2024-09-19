import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';
import { RestaurantsEntity } from './restaurants.entity';
import { CreateRestaurantDto } from './dto/create-restaurant-dto';
import { UpdateRestaurantDto } from './dto/update-restaurant-dto';

@Controller('restaurants')
export class RestaurantsController {
  constructor(private restaurantsService: RestaurantsService) {}

  @Post()
  createRestaurant(@Body() newRestaurant: CreateRestaurantDto) {
    return this.restaurantsService.createRestaurant(newRestaurant);
  }

  @Get()
  getRestaurants(): Promise<RestaurantsEntity[]> {
    return this.restaurantsService.getRestaurants();
  }

  @Get(':id')
  getRestaurant(@Param('id', ParseIntPipe) id: number) {
    return this.restaurantsService.getRestaurant(id);
  }

  @Delete(':id')
  deleteRestaurant(@Param('id', ParseIntPipe) id: number) {
    return this.restaurantsService.deleteRestaurant(id);
  }

  @Patch(':id')
  updateRestaurant(
    @Param('id', ParseIntPipe) id: number,
    @Body() restaurant: UpdateRestaurantDto,
  ) {
    return this.restaurantsService.updateRestaurant(id, restaurant);
  }
}
