import React from "react";
import CommentItem from "./CommentItem";
import styles from "./SideComments.module.scss";
import { KeyboardArrowRight as KeyboardArrowRightIcon } from "@mui/icons-material";
import clsx from "clsx";

const SideComments = () => {
  const [visible, setVisible] = React.useState(false);

  return (
    <div className={clsx(styles.root, !visible && styles.rotated)}>
      <h3 className={styles.title} onClick={() => setVisible(!visible)}>
        Комментарии
        <KeyboardArrowRightIcon />
      </h3>
      {visible && (
        <>
          <CommentItem />
          <CommentItem />
          <CommentItem />
        </>
      )}
    </div>
  );
};

export default SideComments;
