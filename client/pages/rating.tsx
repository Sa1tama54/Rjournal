import {
  Paper,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tabs,
  Typography,
} from '@mui/material';
import { NextPage } from 'next';
import React from 'react';
import FollowBtn from '../components/FollowBtn';
import MainLayout from '../layouts/MainLayout';

const Rating: NextPage = () => {
  return (
    <MainLayout hideComments>
      <Paper elevation={0} className="p-20">
        <Typography marginBottom="6px" fontSize="30px" className="fw-bold" variant="h5">
          Рейтинг сообществ и блогов
        </Typography>
        <Typography fontSize="15px">
          Десять лучших авторов и комментаторов, а также администраторы первых десяти сообществ из
          рейтинга по итогам месяца бесплатно получают Plus-аккаунт на месяц.
        </Typography>
        <Tabs className="mt-20" aria-label="basic tabs example" value={0}>
          <Tab label="ЯНВАРЬ" />
          <Tab label="3 МЕСЯЦА" />
          <Tab label="ЗА ВСЕ ВРЕМЯ" />
        </Tabs>
      </Paper>

      <Paper className="mt-20" elevation={1}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Имя пользователя</TableCell>
              <TableCell align="right">Рейтинг</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                <span className="mr-15">1</span>
                Вася Пупкин
              </TableCell>
              <TableCell align="right">540</TableCell>
              <TableCell align="right">
                <FollowBtn />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    </MainLayout>
  );
};

export default Rating;
