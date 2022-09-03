import React from "react";
import { Paper, Typography } from "@mui/material";
import Image from "next/image";
import styles from "./Post.module.scss";

const Post = () => {
  return (
    <Paper elevation={0} className="p-20">
      <Typography variant="h5" className={styles.title}>
        Сообщество TJ снова собирает деньги на благотворительность к Новому
      </Typography>
      <Typography className={styles.text}>
        Наш сервис донатов обновился — комиссия ниже и разрешены иностранные
        карты. Так что пора его опробовать.
      </Typography>
      <Image
        src="https://kidpassage.com/images/publications/filmyi-pro-novyiy-god-i-rozhdestvo/1651_filmy-pro-novy-god-i-rozhdestvo1155868187.jpg"
        width={600}
        height={400}
        alt=""
      />
    </Paper>
  );
};

export default Post;
