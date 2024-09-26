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
import { UpdateFoodDto } from './dto/update-food-dto';
import { FoodsEntity } from './foods.entity';
import { CreateFoodDto } from './dto/create-food-dto';
import { FoodsService } from './foods.service';

@Controller('foods')
export class FoodsController {
  constructor(private foodsService: FoodsService) {}

  @Post()
  createFood(@Body() newFood: CreateFoodDto) {
    return this.foodsService.createFood(newFood);
  }

  @Get()
  getFoods(): Promise<FoodsEntity[]> {
    return this.foodsService.getFoods();
  }

  @Get(':id')
  getFood(@Param('id', ParseIntPipe) id: number) {
    return this.foodsService.getFood(id);
  }

  @Delete(':id')
  deleteFood(@Param('id', ParseIntPipe) id: number) {
    return this.foodsService.deleteFood(id);
  }

  @Patch(':id')
  updateFood(
    @Param('id', ParseIntPipe) id: number,
    @Body() foods: UpdateFoodDto,
  ) {
    return this.foodsService.updateFood(id, foods);
  }
}
