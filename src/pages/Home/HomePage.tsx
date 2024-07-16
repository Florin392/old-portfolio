import { Grid, styled, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const StyledName = styled(Typography)({
  fontFamily: "Montserrat,sans-serif",
  fontWeight: 400,
  fontSize: "1.5rem",
  letterSpacing: 0.2,
  lineHeight: "4rem",
  "@media screen and (min-width:1836px )": {
    fontSize: "1.7rem",
  },
});

const StyledDescription = styled(Typography)({
  fontSize: "1rem",
  fontFamily: "Montserrat,sans-serif",
  fontWeight: 300,
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

  return (
    <Grid container height={{ md: "100vh" }}>
      <Grid
        item
        xs={12}
        md={4}
        px={{ xs: 4, md: 2 }}
        py={{ xs: 7, md: 0 }}
        height={{ md: "70%", lg: "80%" }}
        alignContent={{ xs: "start", md: "end" }}
      >
        <Grid item>
          <StyledName>Florin Iordache</StyledName>
          <StyledDescription>Front-end Developer</StyledDescription>
          <StyledDescription>
            Stack: React, TypeScript, HTML, CSS
          </StyledDescription>
          <StyledDescription>Currently working -</StyledDescription>
          <StyledDescription>Company: -</StyledDescription>
        </Grid>
      </Grid>

      <Grid
        item
        xs={12}
        md={8}
        px={{ xs: 4, md: 2 }}
        pb={2}
        alignContent={{ xs: "start", md: "center" }}
      >
        <Grid>
          <StyledRightSide onClick={() => navigate("/work")}>
            work
          </StyledRightSide>
          <StyledRightSide onClick={() => navigate("/about")}>
            about
          </StyledRightSide>
          <StyledRightSide onClick={() => navigate("/contact")}>
            contact
          </StyledRightSide>
        </Grid>
      </Grid>
    </Grid>
  );
}
