import { CreateUserDto } from './../user/dto/create-user.dto';
import { UserEntity } from './../user/entities/user.entity';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findByCond({
      email,
      password,
    });
    if (user && user.password === password) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  generateJwt(data: { id: number; email: string }) {
    const payload = { email: data.email, sub: data.id };

    return this.jwtService.sign(payload);
  }

  async login(user: UserEntity) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...userData } = user;

    return {
      ...userData,
      token: this.generateJwt(userData),
    };
  }

  async register(dto: CreateUserDto) {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...userData } = await this.usersService.create(dto);

      return {
        ...userData,
        token: this.generateJwt(userData),
      };
    } catch (error) {
      throw new ForbiddenException(error);
    }
  }
}
