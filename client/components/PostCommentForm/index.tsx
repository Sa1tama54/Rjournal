import { Button, Input } from '@mui/material';
import React from 'react';
import styles from './PostCommentForm.module.scss';

const PostCommentForm = () => {
  const [clicked, setClicked] = React.useState(false);
  const [text, setText] = React.useState('');

  const handleAdd = () => {
    setClicked(false);
    setText('');
  };

  return (
    <div className={styles.form}>
      <Input
        onChange={(e) => setText(e.target.value)}
        onFocus={() => setClicked(true)}
        value={text}
        minRows={clicked ? 5 : 1}
        classes={{ root: styles.inputField }}
        placeholder="Написать комментарий..."
        fullWidth
        multiline
      />
      <div className="d-flex justify-end">
        {clicked && (
          <Button onClick={handleAdd} variant="contained" color="primary">
            Отправить
          </Button>
        )}
      </div>
    </div>
  );
};

export default PostCommentForm;
