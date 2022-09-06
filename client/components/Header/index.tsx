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
import Link from "next/link";
import AuthDialog from "../AuthDialog";

const Header = () => {
  const [authVisible, setAuthVisible] = React.useState(false);

  const handleClickOpen = () => {
    setAuthVisible(true);
  };

  const handleClose = () => {
    setAuthVisible(false);
  };

  return (
    <Paper classes={{ root: styles.root }} elevation={0}>
      <div className="d-flex align-center justify-between">
        <IconButton className="mr-10">
          <MenuIcon />
        </IconButton>
        <Link href="/">
          <a>
            <Image
              height={50}
              width={32}
              src="/static/img/logo.svg"
              alt="logo"
            />
          </a>
        </Link>
        <div className={styles.searchBlock}>
          <SearchIcon />
          <input placeholder="Поиск" type="text" />
        </div>
        <Link href="/write">
          <a>
            <Button variant="contained" color="inherit">
              <span>Новая запись</span>
            </Button>
          </a>
        </Link>
      </div>
      <div className="d-flex align-center">
        <IconButton>
          <SmsOutlinedIcon />
        </IconButton>
        <IconButton onClick={handleClickOpen}>
          <NotificationsNoneIcon />
        </IconButton>
        <Link href="/profile/1">
          <a>
            <Avatar
              variant="rounded"
              className="ml-20 mr-5"
              src="/broken-image.jpg"
            />
          </a>
        </Link>
        <IconButton>
          <KeyboardArrowDownOutlinedIcon />
        </IconButton>
      </div>
      {authVisible && <AuthDialog handleClose={handleClose} />}
    </Paper>
  );
};

export default Header;
