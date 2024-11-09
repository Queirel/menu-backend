import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from './users.entity';
import { Repository } from 'typeorm';
import { UpdateUserDto } from './dto/update-user-dto';
import { validate as isUUID } from 'uuid';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly usersRepository: Repository<UsersEntity>,
  ) {}

  getUsers() {
    return this.usersRepository.find();
  }

  async getUser(id: string) {
    if (!isUUID(id)) {
      throw new NotFoundException(`Invalid id`);
    }
    const userFound = await this.usersRepository.findOne({
      where: { id },
    });

    if (!userFound) {
      throw new NotFoundException(`User ${id} not found`);
    }
    return userFound;
  }

  async deleteUser(id: string) {
    if (!isUUID(id)) {
      throw new NotFoundException(`Invalid id`);
    }
    const userFound = await this.usersRepository.findOne({
      where: { id },
    });
    // if (!userFound) {
    //   return new HttpException('User not found', HttpStatus.NOT_FOUND);
    // }
    if (!userFound) {
      throw new NotFoundException(`User ${id} not found`);
    }
    return this.usersRepository.delete({ id });
  }

  async updateUser(id: string, updateUserDto: UpdateUserDto) {
    if (!isUUID(id)) {
      throw new NotFoundException(`Invalid id`);
    }
    const user = await this.usersRepository.preload({
      id,
      ...updateUserDto,
    });
    if (!user) throw new NotFoundException(`User ${id} not found`);

    try {
      await this.usersRepository.save(user);
      return user;
    } catch (error) {
      this.handleDBExceptions(error);
    }
    //   const userFound = await this.usersRepository.findOne({
    //     where: { id },
    //   });
    //   if (!userFound) {
    //     throw new NotFoundException(`User ${id} not found`);
    //   }
    //   return this.usersRepository.update({ id }, updateUserDto);
    // }
  }

  private handleDBExceptions(error: any) {
    if (error.code == '23505') {
      throw new BadRequestException(error.detail);
    }
  }
}
