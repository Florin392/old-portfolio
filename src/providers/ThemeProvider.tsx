import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material";
import { ReactNode } from "react";

interface ThemeProviderType {
  children: ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderType) {
  const theme = createTheme({
    palette: {
      background: {
        default: "#ece7e1",
      },
      text: {
        primary: "#000000",
        secondary: "#ffffff",
      },
    },
  });
  return <MuiThemeProvider theme={theme}> {children}</MuiThemeProvider>;
}
