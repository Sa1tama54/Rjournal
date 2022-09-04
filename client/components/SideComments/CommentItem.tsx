import React from "react";
import { Avatar, Divider, Typography } from "@mui/material";
import styles from "./SideComments.module.scss";
import Link from "next/link";

const CommentItem = () => {
  return (
    <div className='mb-25'>
      <div className="d-flex">
        <Avatar className="mr-10" sx={{ width: 24, height: 24 }} />
        <b>Вася Пупкин</b>
      </div>
      <Typography className="mb-5 mt-5">
        Теперь, каждое рабочее утро, после кровати, я перекладываюсь туда спать
        ещё на часок. Ну и…
      </Typography>
      <Link href="/">
        <span style={{fontWeight: 500}}>Какая у вас дома ванна?</span>
      </Link>
      <Divider className="pt-20"/>
    </div>
  );
};

export default CommentItem;
