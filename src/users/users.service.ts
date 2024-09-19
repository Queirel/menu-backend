import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from './users.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user-dto';
import { UpdateUserDto } from './dto/update-user-dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly usersRepository: Repository<UsersEntity>,
  ) {}

  async createUser(user: CreateUserDto) {
    const userFound = await this.usersRepository.findOne({
      where: { email: user.email },
    });
    // if (userFound) {
    //   return new HttpException('User alredy exists', HttpStatus.CONFLICT);
    // }
    if (userFound) {
      throw new ConflictException(`User ${user.email} alredy exists`);
    }

    const newUser = this.usersRepository.create(user);
    return this.usersRepository.save(newUser);
  }

  getUsers() {
    return this.usersRepository.find();
  }

  async getUser(id: number) {
    const userFound = await this.usersRepository.findOne({
      where: { id },
    });
    if (!userFound) {
      throw new NotFoundException(`User ${id} not found`);
    }
    return userFound;
  }

  async deleteUser(id: number) {
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

  async updateUser(id: number, user: UpdateUserDto) {
    const userFound = await this.usersRepository.findOne({
      where: { id },
    });
    if (!userFound) {
      throw new NotFoundException(`User ${id} not found`);
    }
    return this.usersRepository.update({ id }, user);
  }
}
