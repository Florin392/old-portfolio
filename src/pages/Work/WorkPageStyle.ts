import { baseStyle } from "@constants/baseStyle";

export const workTitleStyle = {
  ...baseStyle,
  fontSize: {
    xs: "3rem",
    lg: "4rem",
  },
  letterSpacing: 1,
};
export const workDescriptionStyle = {
  ...baseStyle,
  fontSize: { md: "1.2rem", lg: "1.3rem" },
  fontWeight: 300,
  letterSpacing: 1.5,
};
export const projectTitleStyle = {
  ...baseStyle,
  fontSize: {
    xs: "2.6rem",
    lg: "4rem",
    xl: "5rem",
  },
  whiteSpace: "nowrap",
  transition: "transform 1s ease",
  cursor: "pointer",
  "&:hover": {
    fontStyle: "italic",
    transform: "translateX(1rem)",
  },
};

export const projectNameCaptionStyle = {
  ...baseStyle,
  fontSize: { lg: "1.1rem" },
  fontFamily: "Pixelify Sans",
};
