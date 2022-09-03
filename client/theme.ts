import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          color: "black",
          backgroundColor: "white",
          boxShadow:
            "inset 0 -1px 0 0 rgb(0 0 0 / 6%), 0 1px 2px 0 rgb(0 0 0 / 6%)",
          textTransform: "none",

          "&:active": {
            transform: "translateY(1px)",
          },

          "&:hover": {
            backgroundColor: "white",
            boxShadow:
              "inset 0 -1px 0 0 rgb(0 0 0 / 6%), 0 2px 4px 0 rgb(0 0 0 / 8%)",
          },
        },
      },
    },

    MuiAvatar: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
        },
      },
    },
  },
});
