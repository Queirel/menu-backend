import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { FoodsEntity } from './foods.entity';
import { UpdateFoodDto } from './dto/update-food-dto';
import { CreateFoodDto } from './dto/create-food-dto';

@Injectable()
export class FoodsService {
  constructor(
    @InjectRepository(FoodsEntity)
    private readonly foodsRepository: Repository<FoodsEntity>,
  ) {}

  createFood(food: CreateFoodDto) {
    const newFood = this.foodsRepository.create(food);
    return this.foodsRepository.save(newFood);
  }

  getFoods() {
    return this.foodsRepository.find();
  }

  async getFood(id: number) {
    const foodFound = await this.foodsRepository.findOne({
      where: { id },
    });
    if (!foodFound) {
      throw new NotFoundException(`Food ${id} not found`);
    }
    return foodFound;
  }

  async deleteFood(id: number) {
    const foodFound = await this.foodsRepository.findOne({
      where: { id },
    });
    if (!foodFound) {
      throw new NotFoundException(`Food ${id} not found`);
    }
    return this.foodsRepository.delete({ id });
  }

  async updateFood(id: number, food: UpdateFoodDto) {
    const foodFound = await this.foodsRepository.findOne({
      where: { id },
    });
    if (!foodFound) {
      throw new NotFoundException(`Food ${id} not found`);
    }
    return this.foodsRepository.update({ id }, food);
  }
}
