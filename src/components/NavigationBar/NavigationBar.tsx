import { Divider, Grid, styled, Typography } from "@mui/material";
// import "./NavigationBar.css";

export default function NavigationBar() {
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
    fontSize: "10px",
    fontFamily: "Montserrat",
    fontWeight: 500,
    textTransform: "uppercase",
    textDecoration: "none",
    color: "#1a1818",
    "&:hover": {
      textDecoration: "line-through",
    },
  };

  const StyledDivider = styled(Divider)({
    marginRight: "7px",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1a1818",
  });

  return (
    <HeaderContainer>
      <Grid
        container
        height="50%"
        width={{ xs: "60%", md: "0" }}
        direction={{ xs: "row", md: "row-reverse" }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item xs={1}>
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
        <Grid item xs={1} py={2}>
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
        <Grid item xs={4} height={2}>
          <StyledDivider orientation="vertical" />
        </Grid>
      </Grid>
      <Grid container item xs={3} justifyContent={{ xs: "end", md: "start" }}>
        <Typography
          variant="caption"
          sx={{
            fontSize: "10px",
            letterSpacing: "3px",
          }}
        >
          ©2024
        </Typography>
      </Grid>
    </HeaderContainer>
  );
}
