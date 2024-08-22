import { Grid, Typography } from "@mui/material";
import { CONTACT_EMAIL, GITHUB_URL, LINKEDIN_URL } from "../../constants/urls";
import { titleStyle, subtitleStyle } from "./contactPageStyle";

export default function ContactPage() {
  return (
    <Grid container>
      <Grid item xs={12} mt={{ xs: 6, md: 6 }}>
        <Typography sx={titleStyle}>Hello.</Typography>
      </Grid>

      <Grid item xs={12} pb={2}>
        <Typography sx={subtitleStyle}>
          Need a front-end developer to build your website? Get in touch.
        </Typography>
      </Grid>

      <Grid item xs={12} py={2}>
        <Typography sx={subtitleStyle}>
          Email:
          <Typography
            component="a"
            href={`mailto:${CONTACT_EMAIL}`}
            sx={{
              ...subtitleStyle,
              textDecoration: "underline",
              pl: 1,
            }}
          >
            {CONTACT_EMAIL}
          </Typography>
        </Typography>
        <Typography sx={subtitleStyle}>
          You can find me on:
          <Typography
            component="a"
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              ...subtitleStyle,
              px: 1,
            }}
          >
            LinkedIn
          </Typography>
          {"/"}
          <Typography
            component="a"
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              ...subtitleStyle,
              textDecoration: "underline",
              pl: 1,
            }}
          >
            GitHub
          </Typography>
        </Typography>
      </Grid>
    </Grid>
  );
}
