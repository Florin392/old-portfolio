import { Button, Grid, List, ListItem, Typography } from "@mui/material";
import meImage from "../../assets/Florin_Iordache.png";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { AppRoutes } from "../../enums/AppRoutes";
import {
  CV_URL,
  LINKEDIN_URL_CATALIN_MARIN,
  LINKEDIN_URL_JOSE_CARLOS,
} from "../../constants/urls";
import {
  titleStyle,
  subtitleStyle,
  descriptionStyle,
  categoryStyle,
  buttonStyle,
  linkStyle,
} from "./aboutPageStyles";

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
          <Typography sx={titleStyle}>About</Typography>
        </Grid>
        <Grid py={4} pr={{ xs: 2, md: 0 }}>
          <Typography sx={subtitleStyle} pb={4}>
            I'm Florin. A frontend developer
          </Typography>
          <Typography sx={descriptionStyle} pt={2}>
            I am a junior front-end developer with experience in React,
            TypeScript, Redux, CSS and HTML.
          </Typography>
          <Typography sx={descriptionStyle} py={2}>
            After 1.5 years of working in the field and two since I was first
            introduced to the opportunity of learning how to code I am searching
            for a new professional challenge and new ways to improve my
            knowledge.
          </Typography>
          <Typography sx={descriptionStyle} py={2}>
            I chose front-end because I am really good at visualising things and
            thanks to an amazing teacher I discovered I enjoy creating products
            which bring a lot of value from UI/UX perspective.
          </Typography>

          <Typography sx={descriptionStyle} py={2}>
            Since hard skills are something that a lot of people can learn, I am
            also bringing to the table the things that make me different: a lot
            of passions which define me even more than the job-related skills. I
            love hiking and nature so if you cannot reach me I am definitely
            climbing something. I also enjoy running and cooking and I think
            that the best way to end a hard day is taking a long walk with my
            dog.
          </Typography>
          <Typography sx={descriptionStyle} py={2}>
            That would be it. If you already checked my profile and consider I
            might be a good fit just drop an email!
          </Typography>
        </Grid>

        {/* --------------- Experience --------------- */}
        <Grid py={4}>
          <Typography sx={categoryStyle}>Experience</Typography>
          <List sx={descriptionStyle}>
            <ListItem>- Degree in Industrial Engineering</ListItem>
            <ListItem>
              - 9 years experience in Frontend Development, Mechanical Design
              Engineering , Sales
            </ListItem>

            <ListItem sx={{ py: 4 }}>Within those 9 years, I have:</ListItem>

            <ListItem>- 1.5 years in Frontend Development</ListItem>
            <ListItem>
              - 5 years in Automotive, Mechanical Design Engineering
            </ListItem>
            <ListItem>- 2 years in Sales</ListItem>
          </List>
        </Grid>

        {/* --------------- Skills --------------- */}
        <Grid py={4}>
          <Typography sx={categoryStyle}>Skills</Typography>
          <Grid>
            <Typography sx={descriptionStyle} px={2} pt={2} pb={4}>
              Frontend Development / Agile Methodologie / Collaboration / HTML
              and CSS, Redux Toolkit, REST, Jest, Material UI, GIT, Swagger,
              Azure DevOps, Jira,
            </Typography>

            <Button
              variant={"contained"}
              sx={buttonStyle}
              onClick={handleOpenMyCv}
            >
              My CV
            </Button>
          </Grid>
        </Grid>

        {/*--------------- Kudos --------------- */}
        <Grid py={2} mb={{ xs: 6, md: 12 }}>
          <Typography sx={categoryStyle}>Kudos</Typography>
          <Typography sx={descriptionStyle} px={2} pt={2} pb={4}>
            While this portfolio showcases the work I’ve created, it’s important
            to acknowledge that my journey in frontend development has been
            greatly influenced by the support and guidance of others.
            <br /> A heartfelt thank you to{" "}
            <Typography
              component="a"
              href={LINKEDIN_URL_CATALIN_MARIN}
              target="_blank"
              rel="noopener noreferrer"
              sx={linkStyle}
            >
              Cătălin Marin
            </Typography>
            , who taught me the fundamentals and complexities of development
            with patience and clarity. Your mentorship has been a cornerstone of
            my learning experience. <br />
            I’d also like to express my gratitude to{" "}
            <Typography
              component="a"
              href={LINKEDIN_URL_JOSE_CARLOS}
              target="_blank"
              rel="noopener noreferrer"
              sx={linkStyle}
            >
              José Carlos Muñoz Huerta
            </Typography>
            , whose deep knowledge and willingness to share knowledge have
            profoundly shaped my skills. Your guidance and example have been
            invaluable in my growth as a developer. To both of you, thank you
            for helping me become the developer I am today.
          </Typography>
          <Button
            variant={"contained"}
            sx={buttonStyle}
            onClick={handleNavigateToContact}
          >
            Contact me
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
        <img
          src={meImage}
          alt="Photo of Florin Iordache, Frontend Developer"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Grid>
    </Grid>
  );
}
