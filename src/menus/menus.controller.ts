import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { MenusService } from './menus.service';
import { MenusEntity } from './menus.entity';
import { UpdateMenuDto } from './dto/update-menu-dto';
import { CreateMenutDto } from './dto/create-menu-dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
@ApiTags('Menus')
@Controller('menus')
export class MenusController {
  constructor(private menusService: MenusService) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'Menu created',
    type: MenusEntity,
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  createMenu(@Body() newMenu: CreateMenutDto) {
    return this.menusService.createMenu(newMenu);
  }

  @Get()
  @ApiResponse({
    status: 201,
    description: 'Menus obtained',
    type: Promise<MenusEntity[]>,
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  getMenus(): Promise<MenusEntity[]> {
    return this.menusService.getMenus();
  }

  @Get(':id')
  @ApiResponse({
    status: 201,
    description: 'Menu Obtained',
    type: MenusEntity,
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  getMenu(@Param('id') id: string) {
    return this.menusService.getMenu(id);
  }

  @Delete(':id')
  @ApiResponse({
    status: 201,
    description: 'Menu Deleted',
    type: MenusEntity,
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  deleteMenu(@Param('id') id: string) {
    return this.menusService.deleteMenu(id);
  }

  @Patch(':id')
  @ApiResponse({
    status: 201,
    description: 'Menu Updated',
    type: MenusEntity,
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  updateMenu(@Param('id') id: string, @Body() menu: UpdateMenuDto) {
    return this.menusService.updateMenu(id, menu);
  }
}
