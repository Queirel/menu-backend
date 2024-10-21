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
import { ApiResponse, ApiTags } from '@nestjs/swagger';
@ApiTags('Foods')
@Controller('foods')
export class FoodsController {
  constructor(private foodsService: FoodsService) {}

  @Post()
  @ApiResponse({})
  createFood(@Body() newFood: CreateFoodDto) {
    return this.foodsService.createFood(newFood);
  }

  @Get()
  @ApiResponse({})
  getFoods(): Promise<FoodsEntity[]> {
    return this.foodsService.getFoods();
  }

  @Get(':id')
  @ApiResponse({})
  getFood(@Param('id', ParseIntPipe) id: number) {
    return this.foodsService.getFood(id);
  }

  @Delete(':id')
  @ApiResponse({})
  deleteFood(@Param('id', ParseIntPipe) id: number) {
    return this.foodsService.deleteFood(id);
  }

  @Patch(':id')
  @ApiResponse({})
  updateFood(
    @Param('id', ParseIntPipe) id: number,
    @Body() foods: UpdateFoodDto,
  ) {
    return this.foodsService.updateFood(id, foods);
  }
}
