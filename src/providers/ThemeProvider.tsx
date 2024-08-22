import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material";
import { ReactNode, useMemo, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AppRoutes } from "@enums/AppRoutes";

interface ThemeProviderType {
  children: ReactNode;
}

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true;
  }
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

  useEffect(() => {
    const updateTheme = () => {
      if (
        location.pathname === AppRoutes.Home ||
        location.pathname === AppRoutes.Error ||
        location.pathname.startsWith("/project/")
      ) {
        setThemePalette({
          background: {
            default: "#E8EAF0", // Light theme
          },
          text: {
            primary: "#000000",
            secondary: "#ffffff",
          },
        });
      } else if (
        location.pathname === AppRoutes.Work ||
        location.pathname === AppRoutes.About ||
        location.pathname === AppRoutes.Contact
      ) {
        setThemePalette({
          background: {
            default: "#000000", // Dark theme
          },
          text: {
            primary: "#ffffff",
            secondary: "#000000",
          },
        });
      }
    };

    updateTheme();
  }, [location.pathname]);

  const theme = useMemo(
    () =>
      createTheme({
        palette: themePalette,
        breakpoints: {
          values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
            xxl: 1920,
          },
        },
      }),
    [themePalette]
  );

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}
