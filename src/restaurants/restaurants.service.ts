import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRestaurantDto } from './dto/create-restaurant-dto';
import { UpdateRestaurantDto } from './dto/update-restaurant-dto';
import { RestaurantsEntity } from './restaurants.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersEntity } from 'src/users/users.entity';

@Injectable()
export class RestaurantsService {
  constructor(
    @InjectRepository(RestaurantsEntity)
    private readonly restaurantsRepository: Repository<RestaurantsEntity>,
  ) {}

  createRestaurant(restaurant: CreateRestaurantDto, user: UsersEntity) {
    // const restaurantFound = await this.restaurantsRepository.findOne({
    //   where: { email: restaurant.email },
    // });
    // if (restaurantFound) {
    //   return new HttpException('Restaurant alredy exists', HttpStatus.CONFLICT);
    // }
    const newRestaurant = this.restaurantsRepository.create({
      ...restaurant,
      user,
    });
    return this.restaurantsRepository.save(newRestaurant);
  }

  getRestaurants() {
    return this.restaurantsRepository.find();
  }

  async getRestaurant(id: number) {
    const restaurantFound = await this.restaurantsRepository.findOne({
      where: { id },
    });
    if (!restaurantFound) {
      throw new NotFoundException(`Restaurant ${id} not found`);
    }
    return restaurantFound;
  }

  async deleteRestaurant(id: number) {
    const restaurantFound = await this.restaurantsRepository.findOne({
      where: { id },
    });
    if (!restaurantFound) {
      throw new NotFoundException(`Restaurant ${id} not found`);
    }
    return this.restaurantsRepository.delete({ id });
  }

  async updateRestaurant(id: number, restaurant: UpdateRestaurantDto) {
    const restaurantFound = await this.restaurantsRepository.findOne({
      where: { id },
    });
    if (!restaurantFound) {
      throw new NotFoundException(`Restaurant ${id} not found`);
    }
    return this.restaurantsRepository.update({ id }, restaurant);
  }
}
