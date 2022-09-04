import React from "react";
import {
  ModeCommentOutlined as ModeCommentOutlinedIcon,
  BookmarkBorderOutlined as BookmarkBorderOutlinedIcon,
  ShareOutlined as ShareOutlinedIcon,
  Repeat as RepeatIcon,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import styles from './PostActions.module.scss'

const PostActions = () => {
  return (
      <ul className={styles.actions}>
        <li>
          <IconButton>
            <ModeCommentOutlinedIcon />
          </IconButton>
        </li>
        <li>
          <IconButton>
            <BookmarkBorderOutlinedIcon />
          </IconButton>
        </li>
        <li>
          <IconButton>
            <ShareOutlinedIcon />
          </IconButton>
        </li>
        <li>
          <IconButton>
            <RepeatIcon />
          </IconButton>
        </li>
      </ul>
  );
};

export default PostActions;
