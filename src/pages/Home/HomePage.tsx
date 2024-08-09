import { Grid, styled, Typography } from "@mui/material";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const StyledName = styled(Typography)({
  fontFamily: "Montserrat,sans-serif",
  fontWeight: 400,
  fontSize: "2rem",
  letterSpacing: 0.2,
  lineHeight: "4rem",
  "@media screen and (min-width:1836px )": {
    fontSize: "1.7rem",
  },
});

const StyledDescription = styled(Typography)({
  fontSize: "1.1rem",
  fontFamily: "Montserrat,sans-serif",
  fontWeight: 200,
  letterSpacing: 0.8,
  lineHeight: "3rem",
  "@media screen and (min-width:1836px )": {
    fontSize: "1.2rem",
  },
});

const StyledRightSide = styled(Typography)({
  fontSize: "11vw",
  fontFamily: "Pixelify Sans",
  fontWeight: 300,
  fontStyle: "normal",
  textAlign: "left",
  textTransform: "uppercase",
  lineHeight: "1.2em",
  transition: "transform 0.5s ease",
  transform: "matrix(1, 0, 0, 1, 0, 0)",

  "&:hover": {
    fontStyle: "italic",
    cursor: "pointer",
    transform: "matrix(1, 0, 0, 1, 5, 0)",
  },

  "@media screen and (max-width:900px )": {
    fontSize: "15vw",
    lineHeight: "1.3em",
  },
  "@media screen and (min-width:1836px )": {
    fontSize: "10vw",
  },
});

export default function HomePage() {
  const navigate = useNavigate();

  const handleNavigation = useCallback(
    (path: string) => {
      navigate(path);
    },
    [navigate]
  );

  return (
    <Grid container height={{ md: "100vh" }}>
      <Grid
        item
        xs={12}
        md={4}
        py={{ xs: 7, md: 0 }}
        mb={{ xs: 0, md: 25 }}
        alignContent={{ xs: "start", md: "end" }}
      >
        <Grid item>
          <StyledName>Florin Iordache</StyledName>
          <StyledDescription>Frontend Developer</StyledDescription>
          <StyledDescription>
            Stack: React, TypeScript, Redux, HTML, CSS, SASS
          </StyledDescription>
        </Grid>
      </Grid>

      <Grid item xs={12} md={8} alignContent={{ xs: "start", md: "center" }}>
        <Grid>
          <Grid>
            <StyledRightSide onClick={() => handleNavigation("/work")}>
              work
            </StyledRightSide>
            <StyledRightSide onClick={() => handleNavigation("/about")}>
              about
            </StyledRightSide>
            <StyledRightSide onClick={() => handleNavigation("/contact")}>
              contact
            </StyledRightSide>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
