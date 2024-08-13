import { Divider, Grid, Typography, useTheme } from "@mui/material";
import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppRoutes } from "../../enums/AppRoutes";

export default function NavigationBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();

  const isHomePage = location.pathname === AppRoutes.Home;

  const handleNavigateHome = useCallback(() => {
    navigate(AppRoutes.Home);
  }, [navigate]);

  const linkStyles = {
    fontSize: "12px",
    fontFamily: "Montserrat",
    fontWeight: 500,
    textTransform: "uppercase",
    textDecoration: "none",
    letterSpacing: 1,
    cursor: "pointer",
    color: theme.palette.text.primary,
    "&:hover": {
      textDecoration: "line-through",
    },
  };

  return (
    <Grid
      container
      direction={{ xs: "row", md: "row-reverse" }}
      alignItems="center"
      justifyContent={{ xs: "space-between" }}
      textAlign="center"
      pb={{ md: 10 }}
      px={{ xs: 2, md: 0 }}
      sx={{
        position: { md: "fixed" },
        rotate: { md: "180deg" },
        writingMode: { md: "vertical-rl" },
        width: { md: "8%", xl: "6%" },
        height: { md: "90%" },
      }}
    >
      <Grid
        container
        item
        xs={8}
        md={9}
        py={{ xs: 2, md: 0 }}
        direction={{ xs: "row", md: "row-reverse" }}
        alignItems="center"
        textAlign={{ xs: "start", md: "center" }}
      >
        {isHomePage ? (
          <>
            <Grid item xs={3} md={4}>
              <Typography
                component="a"
                href="https://www.linkedin.com/in/florin-iordache-2b998b166/"
                target="_blank"
                rel="noopener noreferrer"
                sx={linkStyles}
              >
                LinkedIn
              </Typography>
            </Grid>
            <Grid item xs={3} md={4}>
              <Typography
                component="a"
                href="https://github.com/Florin392"
                target="_blank"
                rel="noopener noreferrer"
                sx={linkStyles}
              >
                Github
              </Typography>
            </Grid>
          </>
        ) : (
          <Grid item xs={3}>
            <Typography sx={linkStyles} onClick={handleNavigateHome}>
              Home
            </Typography>
          </Grid>
        )}

        <Grid item xs={4} md={3} height={1.1} pl={1}>
          <Divider
            orientation="vertical"
            sx={{ marginRight: 1, backgroundColor: theme.palette.text.primary }}
          />
        </Grid>
      </Grid>

      <Grid item xs={4} md={3} textAlign={{ xs: "right", md: "left" }}>
        <Typography
          variant="caption"
          sx={{
            fontSize: "10px",
            letterSpacing: "3px",
            color: theme.palette.text.primary,
          }}
        >
          ©2024
        </Typography>
      </Grid>
    </Grid>
  );
}
