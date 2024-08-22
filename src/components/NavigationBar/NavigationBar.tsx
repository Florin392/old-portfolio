import { Divider, Grid, Typography, useTheme } from "@mui/material";
import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppRoutes } from "../../enums/AppRoutes";
import { GITHUB_URL, LINKEDIN_URL } from "../../constants/urls";
import { projectNameCaptionStyle } from "../../pages/Work/WorkPageStyle";
import { baseStyle } from "../../constants/baseStyle";

export default function NavigationBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();

  const isHomePage = location.pathname === AppRoutes.Home;
  const isWorkPage = location.pathname === AppRoutes.Work;
  const isProjectPage = location.pathname.startsWith("/project/");

  const handleNavigate = useCallback(() => {
    if (isProjectPage) {
      navigate(AppRoutes.Work);
    } else if (isWorkPage) {
      navigate(AppRoutes.Home);
    } else {
      navigate(AppRoutes.Home);
    }
  }, [navigate, isProjectPage, isWorkPage]);

  const navigationLinksStyle = {
    ...baseStyle,
    fontSize: { xs: ".9rem", md: "1rem" },
    textTransform: "uppercase",
    letterSpacing: 3,
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
      justifyContent="space-between"
      pb={{ md: 12 }}
      px={{ xs: 2, md: 0 }}
      sx={{
        position: { md: "fixed" },
        rotate: { md: "180deg" },
        writingMode: { md: "vertical-rl" },
        width: { md: "4%" },
        height: { md: "95%" },
      }}
    >
      <Grid
        container
        item
        xs={9}
        md={8}
        py={{ xs: 2, md: 0 }}
        direction={{ xs: "row", md: "row-reverse" }}
        alignItems="center"
        textAlign={{ xs: "start", md: "end" }}
      >
        {isHomePage ? (
          <>
            <Grid item xs={4} md={3}>
              <Typography
                component="a"
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                sx={navigationLinksStyle}
              >
                LinkedIn
              </Typography>
            </Grid>
            <Grid item xs={4} md={3} pl={{ xs: 1, md: 0 }}>
              <Typography
                component="a"
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                sx={navigationLinksStyle}
              >
                Github
              </Typography>
            </Grid>
          </>
        ) : isProjectPage ? (
          <Grid item xs={4} md={3}>
            <Typography sx={navigationLinksStyle} onClick={handleNavigate}>
              Work
            </Typography>
          </Grid>
        ) : (
          <Grid item xs={4} md={3}>
            <Typography sx={navigationLinksStyle} onClick={handleNavigate}>
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

      <Grid item xs={3} md={2} textAlign={{ xs: "right", md: "left" }}>
        <Typography
          variant="caption"
          sx={{
            ...projectNameCaptionStyle,
            letterSpacing: 4,
            color: theme.palette.text.primary,
          }}
        >
          ©/2024
        </Typography>
      </Grid>
    </Grid>
  );
}
