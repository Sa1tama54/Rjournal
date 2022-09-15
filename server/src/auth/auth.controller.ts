import { UserService } from './../user/user.service';
import { CreateUserDto } from './../user/dto/create-user.dto';
import { JwtAuthGuard } from './guard/jwt-auth.guard';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guard/local-auth.guard';
import {
  Controller,
  Request,
  Post,
  UseGuards,
  Get,
  Body,
} from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Post('register')
  registerUser(@Body() dto: CreateUserDto) {
    return this.authService.register(dto);
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
