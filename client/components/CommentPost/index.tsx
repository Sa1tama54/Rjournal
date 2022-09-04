import {
  Avatar,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import React, { MouseEventHandler } from "react";
import styles from "./CommentPost.module.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const CommentPost = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event: { currentTarget: any }) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="mb-20">
      <div className="d-flex align-center mb-10">
        <Avatar sx={{ width: 30, height: 30 }} />
        <b className="ml-10">Вася Пупкин</b>
      </div>
      <Typography>
        Теперь, каждое рабочее утро, после кровати, я перекладываюсь туда спать
        ещё на часок. Ну и…
      </Typography>
      <div>
        <span className={styles.replyBtn}>Ответить</span>
        <IconButton onClick={handleClick}>
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Удалить</MenuItem>
          <MenuItem onClick={handleClose}>Редактировать</MenuItem>
        </Menu>
      </div>
      <Divider className="pb-5" />
    </div>
  );
};

export default CommentPost;
