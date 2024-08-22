import { baseStyle } from "@constants/baseStyle";

export const projectTitleStyle = {
  ...baseStyle,
  fontSize: { xs: "2.4rem", sm: "4rem", md: "6rem", lg: "8rem" },
  fontWeight: 500,
};

export const projectSubTitleStyle = {
  ...baseStyle,
  fontSize: { xs: "1.5rem", sm: "2rem", md: "3rem" },
  fontWeight: 500,
};
export const projectSummaryTitleStyle = {
  ...projectTitleStyle,
  fontSize: "1.5rem",
  textDecoration: "underline",
  textUnderlineOffset: "0.2em",
};

export const projectSummaryDescriptionStyle = {
  ...baseStyle,
  fontSize: "1rem",
};

export const projectSummaryDescriptionUrlStyle = {
  ...projectSummaryDescriptionStyle,
  color: "inherit",
  ":hover": {
    textDecoration: "underline",
  },
};

export const projectDescriptionStyle = {
  ...baseStyle,
  fontSize: { xs: "1.1rem", md: "1.3rem" },
  fontWeight: 300,
};

export const projectCheckItOutStyle = {
  ...projectSubTitleStyle,
};
