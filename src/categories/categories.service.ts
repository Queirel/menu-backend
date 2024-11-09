import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateCategoryDto } from './dto/update-category-dto';
import { CategoriesEntity } from './categories.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCategoryDto } from './dto/create-category-dto';
import { validate as isUUID } from 'uuid';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(CategoriesEntity)
    private readonly categoriesRepository: Repository<CategoriesEntity>,
  ) {}

  createCategory(category: CreateCategoryDto) {
    const newCategory = this.categoriesRepository.create(category);
    return this.categoriesRepository.save(newCategory);
  }

  getCategories() {
    return this.categoriesRepository.find();
  }

  async getCategory(id: string) {
    if (!isUUID(id)) {
      throw new NotFoundException(`Invalid id`);
    }
    const categoryFound = await this.categoriesRepository.findOne({
      where: { id },
    });
    if (!categoryFound) {
      throw new NotFoundException(`Category ${id} not found`);
    }
    return categoryFound;
  }

  async deleteCategory(id: string) {
    const categoryFound = await this.categoriesRepository.findOne({
      where: { id },
    });
    if (!categoryFound) {
      throw new NotFoundException(`Category ${id} not found`);
    }
    return this.categoriesRepository.delete({ id });
  }

  async updateCategory(id: string, category: UpdateCategoryDto) {
    const categoryFound = await this.categoriesRepository.findOne({
      where: { id },
    });
    if (!categoryFound) {
      throw new NotFoundException(`Category ${id} not found`);
    }
    return this.categoriesRepository.update({ id }, category);
  }
}
