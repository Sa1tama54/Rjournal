import { yupResolver } from '@hookform/resolvers/yup';
import { Alert, Button } from '@mui/material';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { CreateUserDto } from '../../../utils/api/types';
import { RegisterShema, ValidateShemaTypes } from '../../../utils/validate';
import FormField from '../../FormField';
import { setCookie } from 'nookies';
import { UserApi } from '../../../utils/api';

interface RegisterTypeProps {
  onOpenLogin: () => void;
}

const RegisterType: React.FC<RegisterTypeProps> = ({ onOpenLogin }) => {
  const [errorMessage, setErrorMessage] = React.useState('');

  const form = useForm<ValidateShemaTypes>({
    mode: 'onChange',
    resolver: yupResolver(RegisterShema),
  });

  const onSubmit = async (dto: CreateUserDto) => {
    try {
      const data = await UserApi.register(dto);

      setCookie(null, 'rj_token', data.token, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      });

      setErrorMessage('');
    } catch (error: any) {
      if (error.response) {
        setErrorMessage(error.response.data.detail);
      }
    }
  };

  const loginBtnStyle = {
    '&:hover': {
      color: '#4683d9',
    },
    fontSize: 14,
  };

  return (
    <FormProvider {...form}>
      <FormField name="fullName" label="Имя и фамилия" />
      <FormField name="email" label="Почта" />
      <FormField name="password" label="Пароль" />
      {errorMessage && (
        <Alert className="mb-20" severity="error">
          {errorMessage}
        </Alert>
      )}
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Button
          disabled={!form.formState.isValid || form.formState.isSubmitting}
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
        >
          Зарегистрироваться
        </Button>
      </form>
      <Button sx={loginBtnStyle} fullWidth onClick={onOpenLogin}>
        Войти
      </Button>
    </FormProvider>
  );
};

export default RegisterType;
