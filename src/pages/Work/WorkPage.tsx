import { AppRoutes } from "@enums/AppRoutes";
import { Grid, Typography } from "@mui/material";
import { projectsData } from "@pages/Projects/projectsData";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  workTitleStyle,
  workDescriptionStyle,
  projectTitleStyle,
  projectNameCaptionStyle,
} from "./WorkPageStyle";

export default function WorkPage() {
  const navigate = useNavigate();

  const navigateToProject = useCallback(
    (projectId: string) => {
      navigate(AppRoutes.Project.replace(":projectId", projectId));
    },
    [navigate]
  );

  return (
    <Grid container>
      <Grid item xs={12} md={5}>
        <Grid
          item
          xs={12}
          md={3}
          xl={3}
          ml={{ md: 2 }}
          position={{ md: "fixed" }}
          top={{ md: "40%", xxl: "60%" }}
          height={{ md: "100vh" }}
          pt={{ xs: 8, md: 0 }}
        >
          <Grid item xs={12} pr={2}>
            <Typography py={2} sx={workTitleStyle}>
              Work
            </Typography>
            <Typography sx={workDescriptionStyle}>
              This is a showcase of my work, centred on frontend development,
              improving and expanding to fullstack one project at a time.
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} md={6} py={{ xs: 4, md: 20 }}>
        {Object.keys(projectsData).map((projectId) => (
          <Grid item xs={12} py={{ xs: 0, md: 2 }} key={projectId}>
            <Typography
              sx={{
                ...projectTitleStyle,
                background: projectsData[projectId].projectTitleTextColor,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              onClick={() => navigateToProject(projectId)}
            >
              {projectsData[projectId].projectTitle}
            </Typography>
            <Typography
              display={{ xs: "none", md: "block" }}
              sx={projectNameCaptionStyle}
              pl={2}
            >
              {projectsData[projectId].projectCaption}
            </Typography>
          </Grid>
        ))}
        <Grid item xs={12} py={{ xs: 2, md: 4 }}>
          <Typography sx={projectNameCaptionStyle} textAlign="end">
            Stay tuned, more projects to come!
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
