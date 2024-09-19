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
import { MenusService } from './menus.service';
import { MenusEntity } from './menus.entity';
import { UpdateMenuDto } from './dto/update-menu-dto';
import { CreateMenutDto } from './dto/create-menu-dto';

@Controller('menus')
export class MenusController {
  constructor(private menusService: MenusService) {}

  @Post()
  createMenu(@Body() newMenu: CreateMenutDto) {
    return this.menusService.createMenu(newMenu);
  }

  @Get()
  getMenus(): Promise<MenusEntity[]> {
    return this.menusService.getMenus();
  }

  @Get(':id')
  getMenu(@Param('id', ParseIntPipe) id: number) {
    return this.menusService.getMenu(id);
  }

  @Delete(':id')
  deleteMenu(@Param('id', ParseIntPipe) id: number) {
    return this.menusService.deleteMenu(id);
  }

  @Patch(':id')
  updateMenu(
    @Param('id', ParseIntPipe) id: number,
    @Body() menu: UpdateMenuDto,
  ) {
    return this.menusService.updateMenu(id, menu);
  }
}
