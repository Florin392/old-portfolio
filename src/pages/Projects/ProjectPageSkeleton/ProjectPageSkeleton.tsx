import ContentImage from "@components/ContentImage";
import { HighlightedText } from "@components/HighlightedText";
import NewLineSplitText from "@components/NewLineSplitText ";
import { baseButtonStyle } from "@constants/baseStyle";
import { Grid, Typography, Button } from "@mui/material";
import { useRef, useState, useEffect, useCallback } from "react";
import {
  projectTitleStyle,
  projectSubTitleStyle,
  projectSummaryTitleStyle,
  projectSummaryDescriptionStyle,
  projectSummaryDescriptionUrlStyle,
  projectDescriptionStyle,
  projectCheckItOutStyle,
} from "./projectPageSkeletonStyles";

export interface ProjectPageSkeletonProps {
  projectTitle: string;
  projectTitleTextColor: string;
  projectSubTitle: string;
  scope: string;
  highlights: string;
  projectUrl: string;
  projectHomePageImage: string;
  projectLearnings: string;
  projectMultiplePhotosImage: string;
  projectDescription: string;
}

export default function ProjectPageSkeleton({
  projectTitle,
  projectTitleTextColor,
  projectSubTitle,
  scope,
  highlights,
  projectUrl,
  projectHomePageImage,
  projectLearnings,
  projectMultiplePhotosImage,
  projectDescription,
}: ProjectPageSkeletonProps) {
  const gridRef = useRef(null);
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      { rootMargin: "0px" }
    );

    const currentRef = gridRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const handleGoToProjectUrl = useCallback(() => {
    window.open(projectUrl, "_blank");
  }, [projectUrl]);

  return (
    <Grid container width={{ xl: "80%", xxl: "70%" }} margin="0 auto" mb={14}>
      <Grid
        item
        xs={12}
        sx={{
          background: "#000000",
        }}
        height="70vh"
      >
        {/* ---------------------------------- Title ---------------------------------- */}
        <Typography
          position="relative"
          top="50%"
          textAlign="center"
          sx={{
            ...projectTitleStyle,
            background: projectTitleTextColor,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          px={1}
        >
          {projectTitle}
        </Typography>
      </Grid>

      {/* ---------------------------------- SubTitle ---------------------------------- */}
      <Grid
        item
        xs={12}
        mt={{ md: 6 }}
        py={4}
        textAlign={{ xs: "center", lg: "left" }}
        px={{ xs: 2, lg: 6, xxl: 10 }}
      >
        <Typography sx={projectSubTitleStyle}>{projectSubTitle}</Typography>
      </Grid>

      {/* ---------------------------------- Summary ---------------------------------- */}
      <Grid
        container
        mt={{ md: 6 }}
        py={{ xs: 2, md: 6 }}
        px={{ xs: 2 }}
        justifyContent="center"
      >
        <Grid item xs={11} lg={4} px={{ lg: 4, xxl: 10 }}>
          <Typography sx={projectSummaryTitleStyle} pb={1}>
            Scope
          </Typography>
          <Typography sx={projectSummaryDescriptionStyle}>{scope}</Typography>
        </Grid>

        <Grid item xs={11} lg={4} px={{ lg: 2, xxl: 4 }} py={{ xs: 2, lg: 0 }}>
          <Typography sx={projectSummaryTitleStyle} pb={1}>
            Highlights
          </Typography>
          <Typography>
            {HighlightedText(highlights, projectSummaryDescriptionStyle)}
          </Typography>
        </Grid>

        <Grid item xs={11} lg={4} px={{ lg: 4, xxl: 8 }}>
          <Typography sx={projectSummaryTitleStyle} pb={1}>
            URL
          </Typography>
          <Typography
            component="a"
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            sx={projectSummaryDescriptionUrlStyle}
          >
            {projectUrl}
          </Typography>
        </Grid>
      </Grid>

      {/* ---------------------------------- Home page image ---------------------------------- */}
      <Grid item xs={12} mt={{ md: 6 }} py={4}>
        <ContentImage
          src={projectHomePageImage}
          alt={`${projectTitle} - home page of website`}
        />
      </Grid>

      {/* ---------------------------------- Project description ---------------------------------- */}
      <Grid
        item
        xs={12}
        mt={{ md: 6 }}
        py={{ xs: 2, md: 4 }}
        px={{ xs: 2, md: 8, xxl: 10 }}
      >
        <NewLineSplitText
          text={projectDescription}
          sx={projectDescriptionStyle}
        />
      </Grid>

      {/* ---------------------------------- Multiple images ---------------------------------- */}
      <Grid item xs={12} mt={{ xs: 2, md: 6 }} py={{ xs: 2, md: 4 }}>
        <ContentImage
          src={projectMultiplePhotosImage}
          alt={`${projectTitle} - multiple screenshots from website`}
        />
      </Grid>

      {/* ---------------------------------- Project learning ---------------------------------- */}
      <Grid
        item
        xs={12}
        mt={{ md: 6 }}
        py={{ xs: 2, md: 4 }}
        px={{ xs: 2, md: 8, xxl: 10 }}
      >
        <NewLineSplitText
          text={projectLearnings}
          sx={projectDescriptionStyle}
        />
      </Grid>

      {/* ---------------------------------- Access project website ---------------------------------- */}
      <Grid
        item
        xs={12}
        mt={{ md: 6 }}
        py={{ md: 4 }}
        textAlign="center"
        ref={gridRef}
        sx={{
          transition: "transform 1.5s ease-in-out ",
          transform: isIntersecting ? "translateY(4rem)" : "translateY(0)",
        }}
      >
        <Typography sx={projectCheckItOutStyle} py={2}>
          Check it out.
        </Typography>
        <Button
          onClick={handleGoToProjectUrl}
          sx={{
            ...baseButtonStyle,
            my: 2,
            padding: { xs: "1rem 2.4rem" },
            ":hover": {
              padding: { xs: "1rem 4rem", md: "1rem 8rem" },
              backgroundColor: "#000000",
            },
          }}
        >
          {projectUrl}
        </Button>
      </Grid>
    </Grid>
  );
}
