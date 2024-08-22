import { Grid, Typography } from "@mui/material";
import { AppRoutes } from "../../enums/AppRoutes";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  homeDescriptionStyle,
  homeRightSectionStyle,
  homeTitleStyle,
} from "./homePageStyle";

export default function HomePage() {
  const navigation = useNavigate();

  const navigateToWork = useCallback(
    () => navigation(AppRoutes.Work),
    [navigation]
  );
  const navigateToAbout = useCallback(
    () => navigation(AppRoutes.About),
    [navigation]
  );
  const navigateToContact = useCallback(
    () => navigation(AppRoutes.Contact),
    [navigation]
  );

  return (
    <Grid container height={{ xs: "auto", md: "90vh" }} ml={{ lg: -6 }}>
      <Grid
        item
        xs={12}
        md={4}
        display="flex"
        flexDirection="column"
        justifyContent="flex-end"
        alignItems={{ xs: "flex-start" }}
        textAlign={{ xs: "left", md: "left" }}
        height={{ md: "auto", lg: "79%", xl: "80%" }}
        mb={{ xs: 0, md: 25 }}
        py={{ xs: 6, md: 2 }}
        px={{ lg: 2, xxl: 8 }}
      >
        <Typography sx={homeTitleStyle}>Florin Iordache</Typography>
        <Typography sx={homeDescriptionStyle}>Frontend Developer</Typography>
        <Typography sx={homeDescriptionStyle}>
          Stack: React, TypeScript, Redux, HTML, CSS, SASS
        </Typography>
      </Grid>

      <Grid
        item
        xs={12}
        md={8}
        px={{ md: 2 }}
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Typography sx={homeRightSectionStyle} onClick={navigateToWork}>
          work
        </Typography>
        <Typography sx={homeRightSectionStyle} onClick={navigateToAbout}>
          about
        </Typography>
        <Typography sx={homeRightSectionStyle} onClick={navigateToContact}>
          contact
        </Typography>
      </Grid>
    </Grid>
  );
}
