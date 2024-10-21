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
import { CreateCategoryDto } from './dto/create-category-dto';
import { CategoriesService } from './categories.service';
import { CategoriesEntity } from './categories.entity';
import { UpdateCategoryDto } from './dto/update-category-dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Categories')
@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Post()
  @ApiResponse({})
  createCategory(@Body() newCategory: CreateCategoryDto) {
    return this.categoriesService.createCategory(newCategory);
  }

  @Get()
  @ApiResponse({})
  getCategories(): Promise<CategoriesEntity[]> {
    return this.categoriesService.getCategories();
  }

  @Get(':id')
  @ApiResponse({})
  getCategory(@Param('id', ParseIntPipe) id: number) {
    return this.categoriesService.getCategory(id);
  }

  @Delete(':id')
  @ApiResponse({})
  deleteCategory(@Param('id', ParseIntPipe) id: number) {
    return this.categoriesService.deleteCategory(id);
  }

  @Patch(':id')
  @ApiResponse({})
  updateCategory(
    @Param('id', ParseIntPipe) id: number,
    @Body() categories: UpdateCategoryDto,
  ) {
    return this.categoriesService.updateCategory(id, categories);
  }
}
