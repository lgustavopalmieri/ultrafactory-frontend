import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
    typography:{
        fontFamily: 'Open Sans, Arial, sans-serif',
        h6: {
            fontFamily: 'Montserrat, Arial, sans-serif',
          },
    },
    palette: {
      background: {
        default: "#1E1E1E", // ou "#181818"
      },
      mode: "dark",
      primary: {
        main: "#EAEAEA", // Cinza muito claro
      },
      secondary: {
        main: "#FF3D00", // Vermelho vibrante
      },
      text: {
        primary: "#FFFFFF", // Texto principal em branco
        secondary: "#B0B0B0", // Texto secundário em cinza claro
      },
      info: {
        main: "#2196F3", // Azul padrão
      },
      success: {
        main: "#4CAF50", // Verde
      },
      warning: {
        main: "#FF9800", // Laranja
      },
      error: {
        main: "#F44336", // Vermelho
      },
    },
  });