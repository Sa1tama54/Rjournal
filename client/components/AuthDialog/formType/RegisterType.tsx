import { yupResolver } from "@hookform/resolvers/yup";
import { Button, TextField } from "@mui/material";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { RegisterShema, ValidateShemaTypes } from "../../../utils/validate";
import FormField from "../../FormField";

interface RegisterTypeProps {
  onOpenLogin: () => void;
}

const RegisterType: React.FC<RegisterTypeProps> = ({ onOpenLogin }) => {
  const form = useForm<ValidateShemaTypes>({
    mode: "onChange",
    resolver: yupResolver(RegisterShema),
  });
  const onSubmit = (data: ValidateShemaTypes) => console.log(data);

  return (
    <FormProvider {...form}>
      <FormField name="fullname" label="Имя и фамилия" />
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
          Зарегистрироваться
        </Button>
        <Button
          sx={{
            "&:hover": {
              color: "#4683d9",
            },
            fontSize: 14,
          }}
          fullWidth
          onClick={onOpenLogin}
        >
          Войти
        </Button>
      </form>
    </FormProvider>
  );
};

export default RegisterType;
