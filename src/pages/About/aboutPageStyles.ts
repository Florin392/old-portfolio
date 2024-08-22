import { baseButtonStyle, baseStyle } from "../../constants/baseStyle";

export const aboutTitleStyle = {
  ...baseStyle,
  fontSize: {
    xs: "4rem",
    sm: "8rem",
    md: "14rem",
    lg: "18rem",
    xl: "20rem",
    xxl: "32rem",
  },
  letterSpacing: 6,
  fontWeight: 300,
};

export const aboutSubtitleStyle = {
  ...baseStyle,
  fontSize: { xs: "2rem", md: "4rem" },
  fontWeight: 300,
  lineHeight: 1.5,
};

export const aboutDescriptionStyle = {
  ...baseStyle,
  fontSize: { xs: "1.1rem", md: "1.3rem" },
  fontWeight: { xs: 400, md: 300 },
  letterSpacing: 0.5,
  lineHeight: 1.8,
};

export const aboutCategoryTitleStyle = {
  fontSize: { xs: "2.5rem", md: "4rem" },
  fontFamily: "Indie Flower, sans-serif",
  fontWeight: 400,
};

export const aboutExperienceSubTitleStyle = {
  ...aboutDescriptionStyle,
};

export const aboutExperienceListStyle = {
  ...aboutDescriptionStyle,
};

export const aboutKudosDescriptionStyle = {
  ...aboutDescriptionStyle,
};

export const aboutKudosLinkStyle = {
  ...aboutDescriptionStyle,
  textDecoration: "underline",
  color: "inherit",
  ":hover": {
    textDecoration: "line-through",
  },
};

export const aboutButtonStyle = {
  ...baseButtonStyle,
  fontSize: "1.2rem",
  fontWeight: 600,
  backgroundColor: "#E8EAF0",
  color: "#000000",
  ":hover": {
    padding: { xs: "1rem 6rem", md: "1rem 8rem" },
    backgroundColor: "#E8EAF0",
  },
};
