import { Button, TextField } from "@mui/material";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema, ValidateShemaTypes } from "../../../utils/validate";
import FormField from "../../FormField";

interface LoginTypeProps {
  onOpenRegister: () => void;
}

const LoginType: React.FC<LoginTypeProps> = ({ onOpenRegister }) => {
  const form = useForm<ValidateShemaTypes>({
    mode: "onChange",
    resolver: yupResolver(LoginSchema),
  });
  const onSubmit = (data: ValidateShemaTypes) => console.log(data);

  return (
    <FormProvider {...form}>
      <FormField name="email" label="Почта" />
      <FormField name="password" label="Пароль" />
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Button
          disabled={!form.formState.isValid}
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
        >
          Войти
        </Button>
        <Button
          sx={{
            "&:hover": {
              color: "#4683d9",
            },
            fontSize: 14,
          }}
          onClick={onOpenRegister}
          fullWidth
        >
          Регистрация
        </Button>
      </form>
    </FormProvider>
  );
};

export default LoginType;
