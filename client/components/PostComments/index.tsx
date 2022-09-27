import { Paper, Tab, Tabs, Typography } from '@mui/material';
import React from 'react';
import data from '../../data';
import CommentPost from '../CommentPost';
import PostCommentForm from '../PostCommentForm';
import styles from './PostComments.module.scss';

const PostComments = () => {
  const [activeTab, setActiveTab] = React.useState(0);
  const comments = data.comments[activeTab === 0 ? 'popular' : 'new'];

  return (
    <Paper className="p-20" elevation={0}>
      <div className={styles.container}>
        <Typography variant="h6">42 Комментарии</Typography>
        <Tabs
          onChange={(_, newValue) => setActiveTab(newValue)}
          className="mt-40 mb-20"
          aria-label="basic tabs example"
          value={activeTab}
        >
          <Tab label="популярные" />
          <Tab label="по порядку" />
        </Tabs>
        <PostCommentForm />
        {comments.map((comment) => (
          <CommentPost key={comment.id} {...comment} />
        ))}
      </div>
    </Paper>
  );
};

export default PostComments;
