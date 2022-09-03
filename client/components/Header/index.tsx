import React from "react";
import styles from "./Header.module.scss";
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  NotificationsNone as NotificationsNoneIcon,
  SmsOutlined as SmsOutlinedIcon,
  KeyboardArrowDownOutlined as KeyboardArrowDownOutlinedIcon,
} from "@mui/icons-material";
import { Avatar, Button, IconButton, Paper } from "@mui/material";
import Image from "next/image";

const Header = () => {
  return (
    <Paper classes={{ root: styles.root }} elevation={0}>
      <div className="d-flex align-center justify-between">
        <IconButton className="mr-10">
          <MenuIcon />
        </IconButton>
        <Image height={50} width={32} src="/static/img/logo.svg" alt="logo" />
        <div className={styles.searchBlock}>
          <SearchIcon />
          <input placeholder="Поиск" type="text" />
        </div>
        <Button variant="contained">
          <span>Новая запись</span>
        </Button>
      </div>
      <div className="d-flex align-center">
        <IconButton>
          <SmsOutlinedIcon />
        </IconButton>
        <IconButton>
          <NotificationsNoneIcon />
        </IconButton>
        <Avatar className="ml-20 mr-5" src="/broken-image.jpg" />
        <IconButton>
          <KeyboardArrowDownOutlinedIcon />
        </IconButton>
      </div>
    </Paper>
  );
};

export default Header;
