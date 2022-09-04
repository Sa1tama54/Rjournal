import { Paper, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import CommentPost from "../CommentPost";
import styles from "./PostComments.module.scss";

const PostComments = () => {
  return (
    <Paper className="p-20" elevation={0}>
      <div className={styles.container}>
        <Typography variant="h6">42 Комментарии</Typography>
        <Tabs className="mt-40 mb-20" aria-label="basic tabs example" value={0}>
          <Tab label="популярные" />
          <Tab label="по порядку" />
        </Tabs>
        <CommentPost />
        <CommentPost />
        <CommentPost />
      </div>
    </Paper>
  );
};

export default PostComments;
