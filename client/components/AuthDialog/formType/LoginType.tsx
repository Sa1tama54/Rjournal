import { Alert, Button } from "@mui/material";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema, ValidateShemaTypes } from "../../../utils/validate";
import FormField from "../../FormField";
import { CreateUserDto } from "../../../utils/api/types";
import { UserApi } from "../../../utils/api";
import { setCookie } from "nookies";

interface LoginTypeProps {
  onOpenRegister: () => void;
}

const LoginType: React.FC<LoginTypeProps> = ({ onOpenRegister }) => {
  const [errorMessage, setErrorMessage] = React.useState("");

  const form = useForm<ValidateShemaTypes>({
    mode: "onChange",
    resolver: yupResolver(LoginSchema),
  });

  const onSubmit = async (dto: CreateUserDto) => {
    try {
      const data = await UserApi.login(dto);

      setCookie(null, "rj_token", data.token, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });

      setErrorMessage("");
    } catch (error: any) {
      if (error.response) {
        setErrorMessage(error.response.data.message);
      }
    }
  };

  return (
    <FormProvider {...form}>
      <FormField name="email" label="Почта" />
      <FormField name="password" label="Пароль" />
      {errorMessage && (
        <Alert className="mb-20" severity="error">
          {errorMessage}
        </Alert>
      )}
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
