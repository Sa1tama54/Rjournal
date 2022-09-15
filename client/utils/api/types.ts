export type LoginUserDto = {
  email: string;
  password: string;
};

export type CreateUserDto = {
  fullName: string;
} & LoginUserDto;

export type ResponseCreateUser = {
  id: number;
  fullName: string;
  email: string;
  token: string;
  createdAt: string;
  updatedAt: string;
};
