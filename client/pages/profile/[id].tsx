import { Avatar, Button, Paper, Tab, Tabs, Typography } from '@mui/material';
import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import { Settings as SettingsIcon, SmsOutlined as SmsOutlinedIcon } from '@mui/icons-material';
import Post from '../../components/Post';
import Link from 'next/link';

const Profile = () => {
  return (
    <MainLayout hideComments contentFullWidth>
      <Paper className="pt-20 pr-20 pl-20 mb-20" elevation={0}>
        <div className="d-flex justify-between">
          <div>
            <Avatar
              variant="rounded"
              sx={{ width: 120, height: 120 }}
              src="https://leonardo.osnova.io/5ffeac9a-a0e5-5be6-98af-659bfaabd2a6/-/scale_crop/108x108/-/format/webp/"
            />
            <Typography fontWeight="bold" variant="h4" className="mt-10">
              Amon Bower
            </Typography>
          </div>
          <div>
            <Link href="/profile/settings">
              <a>
                <Button
                  sx={{ minWidth: 45, width: 45, height: 40 }}
                  variant="contained"
                  color="primary"
                  className="mr-10"
                >
                  <SettingsIcon />
                </Button>
              </a>
            </Link>
            <Button className="fw-bold" variant="contained" color="primary">
              <SmsOutlinedIcon className="mr-10" />
              Написать
            </Button>
          </div>
        </div>
        <div className="d-flex mt-10 mb-10">
          <Typography fontWeight="bold" color="rgb(53, 171, 102)" className="mr-15">
            +208
          </Typography>
          <Typography>2 подписчика</Typography>
        </div>
        <Typography>На проекте с 15 сен 2016</Typography>
        <Tabs className="mt-20" aria-label="basic tabs example" value={0}>
          <Tab label="Статьи" />
          <Tab label="Комментарии" />
          <Tab label="Закладки" />
        </Tabs>
      </Paper>
      <div className="d-flex align-start">
        <div className="flex">
          <Post />
        </div>
        <Paper sx={{ width: 300 }} className="ml-20 p-20" elevation={0}>
          <Typography fontWeight="bold">Подписчики</Typography>
          <div className="d-flex mt-15">
            <Avatar className="mr-10" />
            <Avatar />
          </div>
        </Paper>
      </div>
    </MainLayout>
  );
};

export default Profile;
