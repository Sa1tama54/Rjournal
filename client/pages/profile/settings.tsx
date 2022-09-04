import { Button, Divider, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import MainLayout from "../../layouts/MainLayout";

const Settings = () => {
  return (
    <MainLayout hideComments>
      <Paper className="p-20" elevation={0}>
        <Typography variant="h6">Основные настройки</Typography>
        <Divider className="mt-20 mb-30" />
        <form>
          <TextField
            fullWidth
            className="mb-20"
            required
            id="outlined-required"
            label="Никнейм"
            size="small"
          />
          <TextField
            fullWidth
            className="mb-20"
            required
            id="outlined-required"
            label="Эл. почта"
            size="small"
          />
          <TextField
            fullWidth
            required
            id="outlined-required"
            label="Пароль"
            size="small"
          />
        </form>
        <Divider className="mt-30 mb-20" />
        <Button className="fw-bold" variant='contained' color="primary">
            Сохранить изменения
        </Button>
      </Paper>
    </MainLayout>
  );
};

export default Settings;
