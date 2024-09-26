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

@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Post()
  createCategory(@Body() newCategory: CreateCategoryDto) {
    return this.categoriesService.createCategory(newCategory);
  }

  @Get()
  getCategories(): Promise<CategoriesEntity[]> {
    return this.categoriesService.getCategories();
  }

  @Get(':id')
  getCategory(@Param('id', ParseIntPipe) id: number) {
    return this.categoriesService.getCategory(id);
  }

  @Delete(':id')
  deleteCategory(@Param('id', ParseIntPipe) id: number) {
    return this.categoriesService.deleteCategory(id);
  }

  @Patch(':id')
  updateCategory(
    @Param('id', ParseIntPipe) id: number,
    @Body() categories: UpdateCategoryDto,
  ) {
    return this.categoriesService.updateCategory(id, categories);
  }
}
