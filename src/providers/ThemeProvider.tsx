import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material";
import { ReactNode, useMemo, useEffect, useState, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { AppRoutes } from "../enums/AppRoutes";

interface ThemeProviderType {
  children: ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderType) {
  const location = useLocation();
  const [themePalette, setThemePalette] = useState({
    background: {
      default: "#000000",
    },
    text: {
      primary: "#ffffff",
      secondary: "#000000",
    },
  });

  const updateTheme = useCallback(() => {
    if (location.pathname === AppRoutes.Home) {
      setThemePalette({
        background: {
          default: "#E8EAF0",
        },
        text: {
          primary: "#000000",
          secondary: "#ffffff",
        },
      });
    } else {
      setThemePalette({
        background: {
          default: "#000000",
        },
        text: {
          primary: "#ffffff",
          secondary: "#000000",
        },
      });
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleThemeChange = setTimeout(updateTheme, 1000);

    return () => clearTimeout(handleThemeChange);
  }, [updateTheme]);

  const theme = useMemo(
    () => createTheme({ palette: themePalette }),
    [themePalette]
  );

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}
