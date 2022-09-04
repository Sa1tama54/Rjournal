import { Button } from "@mui/material";
import React from "react";
import {
  WhatshotOutlined as WhatshotOutlinedIcon,
  SmsOutlined as SmsOutlinedIcon,
  TrendingUpOutlined as TrendingUpOutlinedIcon,
  FormatListBulletedOutlined as FormatListBulletedOutlinedIcon,
} from "@mui/icons-material";
import styles from "./LeftMenu.module.scss";
import Link from "next/link";

const LeftMenu = () => {
  return (
    <ul className={styles.leftMenu}>
      <li>
        <Link href="/">
          <Button>
            <WhatshotOutlinedIcon className="mr-10" />
            Лента
          </Button>
        </Link>
      </li>
      <li>
        <Link href="/messages">
          <Button>
            <SmsOutlinedIcon className="mr-10" />
            Сообщения
          </Button>
        </Link>
      </li>
      <li>
        <Link href="/rating">
          <Button>
            <TrendingUpOutlinedIcon className="mr-10" />
            Рейтинг RJ
          </Button>
        </Link>
      </li>
      <li>
        <Link href="/subscriptions">
          <Button>
            <FormatListBulletedOutlinedIcon className="mr-10" />
            Подписки
          </Button>
        </Link>
      </li>
    </ul>
  );
};

export default LeftMenu;
