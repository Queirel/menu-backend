import { Body, Controller, Post, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupDto } from './dto/signup-dto';
import { LoginDto } from './dto/login-dto';
import { UsersEntity } from 'src/users/users.entity';
import { GetUser } from './decorators/get-user.decorator';
import { Auth } from './decorators/auth.decorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // @HttpCode(HttpStatus.OK)
  @Post('signup')
  signUp(@Body() signupDto: SignupDto) {
    return this.authService.signUp(signupDto);
  }

  @Post('login')
  loginUser(@Body() loginUserDto: LoginDto) {
    return this.authService.login(loginUserDto);
  }

  @Get('check-status')
  @Auth()
  checkAuthStatus(@GetUser() user: UsersEntity) {
    return this.authService.checkAuthStatus(user);
  }
}
