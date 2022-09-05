import { Button, Input } from "@mui/material";
import dynamic from "next/dynamic";
import React from "react";
import styles from "./WriteForm.module.scss";

const Editor = dynamic(() => import("../Editor"), {
  ssr: false,
});

interface WriteFormProps {
  title?: string;
}

const WriteForm: React.FC<WriteFormProps> = ({ title }) => {
  return (
    <>
      <Input
        classes={{ root: styles.textField }}
        placeholder="Заголовок"
        defaultValue={title}
      />
      <div className={styles.editor}>
        <Editor />
      </div>
      <Button variant="contained" color="primary">
        Опубликовать
      </Button>
    </>
  );
};

export default WriteForm;
