import React from "react";
import { Avatar, Divider, Typography } from "@mui/material";
import styles from "./SideComments.module.scss";
import Link from "next/link";

interface CommentItemProps {
  user: {
    fullName: string;
    avatarUrl: string;
  };
  text: string;
  post: {
    title: string;
  };
}

const CommentItem: React.FC<CommentItemProps> = ({ user, text, post }) => {
  return (
    <div className="mb-25">
      <div className="d-flex">
        <Avatar
          src={user.avatarUrl}
          className="mr-10"
          sx={{ width: 24, height: 24 }}
        />
        <b>{user.fullName}</b>
      </div>
      <Typography className="mb-5 mt-5">{text}</Typography>
      <Link href="/">
        <span style={{ fontWeight: 500 }}>{post.title}</span>
      </Link>
      <Divider className="pt-20" />
    </div>
  );
};

export default CommentItem;
