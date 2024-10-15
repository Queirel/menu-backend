import {
  ConflictException,
  HttpException,
  HttpStatus,
  Injectable,
  //   UnauthorizedException,
} from '@nestjs/common';
// import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from 'src/users/users.entity';
import { SignupDto } from './dto/signup-dto';
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

  //   async signIn(username: string, pass: string): Promise<any> {
  //     const user = await this.usersService.findOne(username);
  //     if (user?.password !== pass) {
  //       throw new UnauthorizedException();
  //     }
  //     const { password, ...result } = user;
  //     // TODO: Generate a JWT and return it here
  //     // instead of the user object
  //     return result;
  //   }
}
