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
import { Auth } from 'src/auth/decorators/auth.decorator';
import { GetUser } from 'src/auth/decorators/get-user.decorator';
import { UsersEntity } from 'src/users/users.entity';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
@ApiTags('Restaurants')
@Controller('restaurants')
export class RestaurantsController {
  constructor(private restaurantsService: RestaurantsService) {}

  @Post()
  @Auth()
  @ApiResponse({
    status: 201,
    description: 'Restaurant created',
    type: RestaurantsEntity,
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  createRestaurant(
    @Body() newRestaurant: CreateRestaurantDto,
    @GetUser() user: UsersEntity,
  ) {
    return this.restaurantsService.createRestaurant(newRestaurant, user);
  }

  @Get()
  @ApiResponse({
    status: 201,
    description: 'Restaurants obtained',
    type: Promise<RestaurantsEntity[]>,
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  getRestaurants(): Promise<RestaurantsEntity[]> {
    return this.restaurantsService.getRestaurants();
  }

  @Get(':id')
  @ApiResponse({
    status: 201,
    description: 'Restaurant obtained',
    type: RestaurantsEntity,
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  getRestaurant(@Param('id', ParseIntPipe) id: number) {
    return this.restaurantsService.getRestaurant(id);
  }

  @Delete(':id')
  @ApiResponse({
    status: 201,
    description: 'Restaurant deleted',
    type: RestaurantsEntity,
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  deleteRestaurant(@Param('id', ParseIntPipe) id: number) {
    return this.restaurantsService.deleteRestaurant(id);
  }

  @Patch(':id')
  @ApiResponse({
    status: 201,
    description: 'Restaurant updated',
    type: RestaurantsEntity,
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  updateRestaurant(
    @Param('id', ParseIntPipe) id: number,
    @Body() restaurant: UpdateRestaurantDto,
  ) {
    return this.restaurantsService.updateRestaurant(id, restaurant);
  }
}
