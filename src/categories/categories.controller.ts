import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
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
  @ApiResponse({
    status: 201,
    description: 'Category created',
    type: CategoriesEntity,
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  createCategory(@Body() newCategory: CreateCategoryDto) {
    return this.categoriesService.createCategory(newCategory);
  }

  @Get()
  @ApiResponse({
    status: 201,
    description: 'Categories obtained',
    type: Promise<CategoriesEntity[]>,
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  getCategories(): Promise<CategoriesEntity[]> {
    return this.categoriesService.getCategories();
  }

  @Get(':id')
  @ApiResponse({
    status: 201,
    description: 'Category obtained',
    type: CategoriesEntity,
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  getCategory(@Param('id') id: string) {
    return this.categoriesService.getCategory(id);
  }

  @Delete(':id')
  @ApiResponse({
    status: 201,
    description: 'Category deleted',
    type: CategoriesEntity,
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  deleteCategory(@Param('id') id: string) {
    return this.categoriesService.deleteCategory(id);
  }

  @Patch(':id')
  @ApiResponse({
    status: 201,
    description: 'Category updated',
    type: CategoriesEntity,
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  updateCategory(
    @Param('id') id: string,
    @Body() categories: UpdateCategoryDto,
  ) {
    return this.categoriesService.updateCategory(id, categories);
  }
}
