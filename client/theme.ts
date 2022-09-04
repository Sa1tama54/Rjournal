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

        root: {
          borderRadius: "8px",
          textTransform: "inherit",
          fontSize: 16,
          color: "#000",
          fontWeight: 400,
          transition: "none",
          "&:active": {
            boxShadow:
              "0 1px 1px rgb(0 0 0 / 15%), 0 4px 7px rgb(0 0 0 / 0%), 0 -1px 0 rgb(0 0 0 / 5%), -1px 0 0 rgb(0 0 0 / 5%), 1px 0 0 rgb(0 0 0 / 5%) !important",
            transform: "translateY(1px)",
          },
        },

        containedPrimary: {
          backgroundColor: "#4683d9",
          color: "#fff",

          "&:hover": {
            backgroundColor: "#437CCE",
          },
        },
      },
    },
  },
});
