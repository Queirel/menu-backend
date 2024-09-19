import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateMenuDto } from './dto/update-menu-dto';
import { MenusEntity } from './menus.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMenutDto } from './dto/create-menu-dto';

@Injectable()
export class MenusService {
  constructor(
    @InjectRepository(MenusEntity)
    private readonly menusRepository: Repository<MenusEntity>,
  ) {}

  createMenu(menu: CreateMenutDto) {
    // const menuFound = await this.menusRepository.findOne({
    //   where: { email: menu.email },
    // });
    // if (menuFound) {
    //   return new HttpException('Menu alredy exists', HttpStatus.CONFLICT);
    // }
    const newMenu = this.menusRepository.create(menu);
    return this.menusRepository.save(newMenu);
  }

  getMenus() {
    return this.menusRepository.find();
  }

  async getMenu(id: number) {
    const menuFound = await this.menusRepository.findOne({
      where: { id },
    });
    if (!menuFound) {
      throw new NotFoundException(`Menu ${id} not found`);
    }
    return menuFound;
  }

  async deleteMenu(id: number) {
    const menuFound = await this.menusRepository.findOne({
      where: { id },
    });
    if (!menuFound) {
      throw new NotFoundException(`Menu ${id} not found`);
    }
    return this.menusRepository.delete({ id });
  }

  async updateMenu(id: number, menu: UpdateMenuDto) {
    const menuFound = await this.menusRepository.findOne({
      where: { id },
    });
    if (!menuFound) {
      throw new NotFoundException(`Menu ${id} not found`);
    }
    return this.menusRepository.update({ id }, menu);
  }
}
