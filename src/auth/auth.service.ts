import {
  ConflictException,
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
  //   UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from 'src/users/users.entity';
import { SignupDto } from './dto/signup-dto';
import { LoginDto } from './dto/login-dto';
@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly usersRepository: Repository<UsersEntity>,

    // private readonly jwtService: JwtService,
  ) {}

  async signUp(user: SignupDto) {
    const userFound = await this.usersRepository.findOne({
      where: { email: user.email },
    });
    if (userFound) {
      return new HttpException('User alredy exists', HttpStatus.CONFLICT);
    }
    if (userFound) {
      throw new ConflictException(`User ${user.email} alredy exists`);
    }

    const { password, ...userData } = user;

    const newUser = this.usersRepository.create({
      ...userData,
      password: bcrypt.hashSync(password, 5),
    });
    return this.usersRepository.save(newUser);
  }

  async login(user: LoginDto) {
    const { password, email } = user;
    const userFound = await this.usersRepository.findOne({
      where: { email },
    });

    if (!userFound) {
      throw new UnauthorizedException('email or password are not valid');
    }

    if (bcrypt.compareSync(password, user.password)) {
    }
  }
}
