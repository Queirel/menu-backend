import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UpdateFoodDto } from './dto/update-food-dto';
import { FoodsEntity } from './foods.entity';
import { CreateFoodDto } from './dto/create-food-dto';
import { FoodsService } from './foods.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
@ApiTags('Foods')
@Controller('foods')
export class FoodsController {
  constructor(private foodsService: FoodsService) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'Food created',
    type: FoodsEntity,
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  createFood(@Body() newFood: CreateFoodDto) {
    return this.foodsService.createFood(newFood);
  }

  @Get()
  @ApiResponse({
    status: 201,
    description: 'Foods obtained',
    type: FoodsEntity,
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  getFoods(): Promise<FoodsEntity[]> {
    return this.foodsService.getFoods();
  }

  @Get(':id')
  @ApiResponse({
    status: 201,
    description: 'Food obtained',
    type: FoodsEntity,
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  getFood(@Param('id') id: string) {
    return this.foodsService.getFood(id);
  }

  @Delete(':id')
  @ApiResponse({
    status: 201,
    description: 'Food deleted',
    type: FoodsEntity,
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  deleteFood(@Param('id') id: string) {
    return this.foodsService.deleteFood(id);
  }

  @Patch(':id')
  @ApiResponse({
    status: 201,
    description: 'Food updated',
    type: FoodsEntity,
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  updateFood(@Param('id') id: string, @Body() foods: UpdateFoodDto) {
    return this.foodsService.updateFood(id, foods);
  }
}
