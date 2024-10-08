import { createTheme } from "@mui/material"

export const darkTheme = createTheme({
  typography: {
    fontFamily: "Open Sans, Arial, sans-serif",
    h6: {
      fontFamily: "Montserrat, Arial, sans-serif",
    },
  },
  palette: {
    background: {
      default: "#1E1E1E",
    },
    mode: "dark",
    primary: {
      main: "#EAEAEA",
    },
    secondary: {
      main: "#00bcd4",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#B0B0B0",
    },
    info: {
      main: "#2196F3",
    },
    success: {
      main: "#4CAF50",
    },
    warning: {
      main: "#FF9800",
    },
    error: {
      main: "#F44336",
    },
  },
})
