import { Divider, Grid, styled, Typography, useTheme } from "@mui/material";
import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function NavigationBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const theme = useTheme();

  const handleNavigateHome = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const HeaderContainer = styled(Grid)({
    "@media screen and (max-width:899px)": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    "@media screen and (min-width:900px)": {
      display: "flex",
      flexDirection: "row-reverse",
      position: "fixed",
      rotate: "180deg",
      writingMode: "vertical-rl",
      justifyContent: "space-between",
      alignItems: "center",
      textAlign: "center",
      width: "4%",
      height: "90%",
      paddingBottom: "10%",
    },
  });

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

  const StyledDivider = styled(Divider)({
    marginRight: "7px",
    backgroundColor: theme.palette.text.primary,
  });

  return (
    <HeaderContainer px={{ xs: 4, md: 0 }} pt={2}>
      <>
        <Grid
          container
          item
          xs={8}
          height={{ md: "60%" }}
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
            <Grid item xs={3} >
              <Typography sx={linkStyles} onClick={handleNavigateHome}>
                Home
              </Typography>
            </Grid>
          )}

          <Grid item xs={4} md={3} height={2}>
            <StyledDivider orientation="vertical" />
          </Grid>
        </Grid>

        <Grid item xs={3} textAlign={{ xs: "end", md: "center" }}>
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
      </>
    </HeaderContainer>
  );
}
