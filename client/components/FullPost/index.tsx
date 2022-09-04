import { Avatar, Button, Paper, Typography } from "@mui/material";
import React from "react";
import PostActions from "../PostActions";
import styles from "./FullPost.module.scss";
import {
  SmsOutlined as SmsOutlinedIcon,
  PersonAddAltOutlined as PersonAddAltOutlinedIcon,
} from "@mui/icons-material";
import CommentPost from "../CommentPost";

const FullPost = () => {
  return (
    <>
      <Paper className="pt-30 pb-30 mb-30" elevation={0}>
        <div className={styles.container}>
          <Typography className={styles.title} variant="h5">
            Twitter начнёт тестировать функцию редактирования твитов «в
            ближайшие месяцы»
          </Typography>
          <Typography className={styles.text}>
            Сначала она будет доступна пользователям платной подписки. Twitter
            подтвердила, что работает над функцией редактирования твитов с 2021
            года. Тестирование будет доступно подписчикам Twitter Blue.
          </Typography>

          <div className={styles.actions}>
            <PostActions />
          </div>

          <div className="d-flex justify-between">
            <div className={styles.info}>
              <Avatar variant="rounded" />
              <b>Roberto Carlos</b>
              <span>+1565</span>
            </div>
            <div>
              <Button className="mr-15" variant="contained" color="primary">
                <SmsOutlinedIcon />
              </Button>
              <Button variant="contained" color="primary">
                <PersonAddAltOutlinedIcon className="mr-10" />
                <b>Подписаться</b>
              </Button>
            </div>
          </div>
        </div>
      </Paper>
    </>
  );
};

export default FullPost;
