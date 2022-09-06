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
import { useRouter } from "next/router";

const menu = [
  {
    text: "Лента",
    icon: <WhatshotOutlinedIcon className="mr-10" />,
    path: "/",
  },
  {
    text: "Сообщения",
    icon: <SmsOutlinedIcon className="mr-10" />,
    path: "/messages",
  },
  {
    text: "Рейтинг",
    icon: <TrendingUpOutlinedIcon className="mr-10" />,
    path: "/rating",
  },
  {
    text: "Подписки",
    icon: <FormatListBulletedOutlinedIcon className="mr-10" />,
    path: "/subscriptions",
  },
];

const LeftMenu = () => {
  const router = useRouter();

  return (
    <ul className={styles.leftMenu}>
      {menu.map((obj) => (
        <li key={obj.path}>
          <Link href={obj.path}>
            <a>
              <Button
                variant={router.asPath === obj.path ? "contained" : "text"}
                color="secondary"
              >
                {obj.icon}
                {obj.text}
              </Button>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default LeftMenu;
