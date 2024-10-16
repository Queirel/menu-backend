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
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly usersRepository: Repository<UsersEntity>,
    private readonly jwtService: JwtService,
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
    await this.usersRepository.save(newUser);

    return {
      ...newUser,
      token: this.getJwtToken({ id: newUser.id }),
    };
  }

  async login(loginUser: LoginDto) {
    const { password, email } = loginUser;
    const userFound = await this.usersRepository.findOne({
      where: { email },
      select: { email: true, password: true, id: true },
    });

    if (!userFound) {
      throw new UnauthorizedException('email or password are not valid');
    }

    if (!bcrypt.compareSync(password, userFound.password))
      throw new UnauthorizedException('Credentials are not valid (password)');

    return {
      ...loginUser,
      token: this.getJwtToken({ id: userFound.id }),
    };
  }

  private getJwtToken(payload: JwtPayload) {
    const token = this.jwtService.sign(payload);
    return token;
  }
}
