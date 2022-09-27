import * as yup from 'yup';

export interface ValidateShemaTypes {
  email: string;
  password: string;
  fullName: string;
}

export const LoginSchema = yup.object().shape({
  email: yup.string().email('Некорректная почта').required('Почта обязательная'),
  password: yup
    .string()
    .min(6, 'Длина пароля должна быть более 6 символов')
    .max(32, 'Длина пароля должна быть менее 32 символов')
    .required('Пароль обязательный'),
});

export const RegisterShema = yup
  .object()
  .shape({
    fullName: yup.string().required('Имя и фамилия обязательны'),
  })
  .concat(LoginSchema);
