import { ArrowBack } from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import React from "react";
import styles from "./AuthDialog.module.scss";
import LoginType from "./formType/LoginType";
import MainType from "./formType/MainType";
import RegisterType from "./formType/RegisterType";

interface AuthDialogProps {
  handleClose: () => void;
}

const AuthDialog: React.FC<AuthDialogProps> = ({ handleClose }) => {
  const [formType, setFormType] = React.useState<"main" | "login" | "register">(
    "main"
  );

  const onOpenLogin = () => setFormType("login");
  const onOpenRegister = () => setFormType("register");

  const formTypeText =
    formType === "main" ? (
      "Вход на TJ"
    ) : (
      <>
        <ArrowBack
          className="mr-5"
          sx={{
            cursor: "pointer",
            "&:hover": {
              color: "#4683d9",
            },
          }}
          onClick={() => setFormType("main")}
        />
        К авторизации
      </>
    );

  return (
    <>
      <Dialog
        open={true}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        maxWidth="xs"
        fullWidth
      >
        <DialogContent>
          <div className={styles.content}>
            <DialogContentText>
              <Typography
                fontSize={16}
                fontWeight="bold"
                className="mb-15 d-flex align-center"
                variant="h6"
              >
                {formTypeText}
              </Typography>
              {formType === "main" && <MainType onOpenLogin={onOpenLogin} />}
              {formType === "login" && (
                <LoginType onOpenRegister={onOpenRegister} />
              )}
              {formType === "register" && (
                <RegisterType onOpenLogin={onOpenLogin} />
              )}
            </DialogContentText>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AuthDialog;
