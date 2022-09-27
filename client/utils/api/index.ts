import { CreateUserDto, LoginUserDto, ResponseCreateUser } from './types';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5495/',
});

export const UserApi = {
  async register(dto: CreateUserDto) {
    const { data } = await instance.post<CreateUserDto, { data: ResponseCreateUser }>(
      '/auth/register',
      dto
    );

    return data;
  },

  async login(dto: LoginUserDto) {
    const { data } = await instance.post<LoginUserDto, { data: ResponseCreateUser }>(
      '/auth/login',
      dto
    );

    return data;
  },

  async getProfileData(token: string) {
    const { data } = await instance.get<ResponseCreateUser>('/users/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  },
};
