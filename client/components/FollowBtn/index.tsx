import { Button } from '@mui/material';
import React from 'react';
import { Add as AddIcon, Check as CheckIcon } from '@mui/icons-material';
import styles from './FollowBtn.module.scss';

const FollowBtn = () => {
  const [followed, setFollowed] = React.useState(false);

  return (
    <Button
      onClick={() => setFollowed(!followed)}
      variant="contained"
      color="inherit"
      className={styles.followBtn}
    >
      {!followed ? <AddIcon /> : <CheckIcon className={styles.checkBtn} />}
    </Button>
  );
};

export default FollowBtn;
