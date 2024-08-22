import { Button, Grid, List, ListItem, Typography } from "@mui/material";
import meImage from "../../assets/Florin_Iordache.png";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { AppRoutes } from "../../enums/AppRoutes";
import { CV_URL } from "../../constants/urls";
import {
  aboutTitleStyle,
  aboutSubtitleStyle,
  aboutDescriptionStyle,
  aboutCategoryTitleStyle,
  aboutKudosDescriptionStyle,
  aboutKudosLinkStyle,
  aboutButtonStyle,
  aboutExperienceSubTitleStyle,
  aboutExperienceListStyle,
} from "./aboutPageStyles";
import { aboutContent } from "./aboutContent";
import { HighlightedText } from "../../components/HighlightedText";
import ContentImage from "../../components/ContentImage";

export default function AboutPage() {
  const navigate = useNavigate();

  const handleOpenMyCv = useCallback(() => {
    window.open(CV_URL, "_blank");
  }, []);

  const handleNavigateToContact = useCallback(() => {
    navigate(AppRoutes.Contact);
  }, [navigate]);

  return (
    <Grid container>
      <Grid item xs={12} md={10} lg={8} xl={6} zIndex={2}>
        <Grid pt={{ xs: 8, xxl: 0 }}>
          <Typography component="h1" sx={aboutTitleStyle}>
            {aboutContent.title}
          </Typography>
        </Grid>
        <Grid py={4} pr={{ xs: 2, md: 0 }}>
          <Typography component="h2" sx={aboutSubtitleStyle} pb={4}>
            {aboutContent.subTitle}
          </Typography>
          {aboutContent.description.map((parahraph, index) => (
            <Typography key={index} sx={aboutDescriptionStyle} pt={2}>
              {parahraph.text}
            </Typography>
          ))}
        </Grid>

        {/* --------------- Experience --------------- */}
        <Grid py={4}>
          <Typography sx={aboutCategoryTitleStyle}>
            {aboutContent.experienceTitle}
          </Typography>
          <List sx={aboutDescriptionStyle}>
            {aboutContent.experienceDescription.map((item, index) => {
              return item.subTitle ? (
                <Typography
                  key={index}
                  sx={aboutExperienceSubTitleStyle}
                  py={2}
                >
                  {item.subTitle}
                </Typography>
              ) : (
                <ListItem key={index} sx={aboutExperienceListStyle}>
                  {item.text}
                </ListItem>
              );
            })}
          </List>
        </Grid>

        {/* --------------- Skills --------------- */}
        <Grid py={4}>
          <Typography sx={aboutCategoryTitleStyle}>
            {aboutContent.skillsTitle}
          </Typography>
          <Grid>
            <Typography px={2} pt={2} pb={4}>
              {HighlightedText(
                aboutContent.skillsDescription,
                aboutDescriptionStyle
              )}
            </Typography>

            <Button sx={aboutButtonStyle} onClick={handleOpenMyCv}>
              {aboutContent.myCvButtonLabel}
            </Button>
          </Grid>
        </Grid>

        {/*--------------- Kudos --------------- */}
        <Grid py={2} mb={{ xs: 6, md: 12 }}>
          <Typography sx={aboutCategoryTitleStyle}>
            {aboutContent.kudosTitle}
          </Typography>
          {aboutContent.kudosDescription.map((text, index) => (
            <Typography key={index} sx={aboutKudosDescriptionStyle} px={2}>
              {text.text}
              {text.link && (
                <>
                  <Typography
                    component="a"
                    href={text.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={aboutKudosLinkStyle}
                  >
                    {text.link.name}
                  </Typography>
                  {text.afterLinkText}
                </>
              )}
            </Typography>
          ))}
          <Button
            sx={{ ...aboutButtonStyle, mt: 6 }}
            onClick={handleNavigateToContact}
          >
            {aboutContent.contactMeButtonLabel}
          </Button>
        </Grid>
      </Grid>

      <Grid
        item
        xs={4}
        position="absolute"
        top={{ md: "4rem" }}
        right={{
          xs: "2rem",
          md: "2rem",
          lg: "12rem",
          xl: "26rem",
          xxl: "48rem",
        }}
        zIndex={1}
        height={{ xs: "240px", sm: "280px", md: "400px", lg: "520px" }}
        width={{ md: "360px", lg: "400px" }}
      >
        <ContentImage
          src={meImage}
          alt="Photo of Florin Iordache, Frontend Developer"
        />
      </Grid>
    </Grid>
  );
}
