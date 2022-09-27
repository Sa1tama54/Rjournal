import { Avatar, Divider, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import React, { MouseEventHandler } from 'react';
import styles from './CommentPost.module.scss';
import MoreVertIcon from '@mui/icons-material/MoreVert';

interface CommentPostProps {
  user: {
    fullName: string;
    avatarUrl: string;
  };
  text: string;
  createdAt: string;
}

const CommentPost: React.FC<CommentPostProps> = ({ user, text, createdAt }) => {
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
        <Avatar src={user.avatarUrl} sx={{ width: 30, height: 30 }} />
        <b className="ml-10">{user.fullName}</b>
        <span className={styles.data}>{createdAt}</span>
      </div>
      <Typography>{text}</Typography>
      <div>
        <span className={styles.replyBtn}>Ответить</span>
        <IconButton onClick={handleClick}>
          <MoreVertIcon />
        </IconButton>
        <Menu id="basic-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
          <MenuItem onClick={handleClose}>Удалить</MenuItem>
          <MenuItem onClick={handleClose}>Редактировать</MenuItem>
        </Menu>
      </div>
      <Divider className="pb-5" />
    </div>
  );
};

export default CommentPost;
