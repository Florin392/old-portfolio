import { Grid, Typography } from "@mui/material";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../enums/AppRoutes";

export default function HomePage() {
  const navigate = useNavigate();

  const handleNavigation = useCallback(
    (path: string) => {
      navigate(path);
    },
    [navigate]
  );

  const nameStyle = {
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 400,
    fontSize: { xs: "2rem", md: "2.2rem" },
    letterSpacing: 1,
    lineHeight: "4rem",
  };

  const descriptionStyle = {
    fontSize: { xs: "1.1rem", md: "1.3rem" },
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 200,
    letterSpacing: 0.5,
    lineHeight: "3rem",
  };

  const rightSideStyle = {
    fontSize: { xs: "17vw", md: "12vw", xl: "10vw" },
    fontFamily: "Pixelify Sans",
    fontWeight: 300,
    textTransform: "uppercase",
    lineHeight: "1.2em",
    transition: "transform 0.5s ease",
    textAlign: "left",
    cursor: "pointer",
    "&:hover": {
      fontStyle: "italic",
      transform: "translateX(5px)",
    },
  };

  return (
    <Grid container height={{ xs: "auto", md: "90vh" }}>
      <Grid
        item
        xs={12}
        md={4}
        display="flex"
        flexDirection="column"
        justifyContent="flex-end"
        alignItems={{ xs: "flex-start" }}
        py={{ xs: 7, md: 2 }}
        mb={{ xs: 0, md: 25 }}
        pl={{ xs: 2, md: 6 }}
        sx={{
          textAlign: { xs: "left", md: "left" },
          height: { md: "auto", lg: "79%", xl: "80%" },
        }}
      >
        <Typography sx={nameStyle}>Florin Iordache</Typography>
        <Typography sx={descriptionStyle}>Frontend Developer</Typography>
        <Typography sx={descriptionStyle}>
          Stack: React, TypeScript, Redux, HTML, CSS, SASS
        </Typography>
      </Grid>

      <Grid
        item
        xs={12}
        md={8}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems={{ xs: "flex-start" }}
        pl={{ xs: 2, md: 2 }}
      >
        <Typography
          sx={rightSideStyle}
          onClick={() => handleNavigation(AppRoutes.Work)}
        >
          work
        </Typography>
        <Typography
          sx={rightSideStyle}
          onClick={() => handleNavigation(AppRoutes.About)}
        >
          about
        </Typography>
        <Typography
          sx={rightSideStyle}
          onClick={() => handleNavigation(AppRoutes.Contact)}
        >
          contact
        </Typography>
      </Grid>
    </Grid>
  );
}
