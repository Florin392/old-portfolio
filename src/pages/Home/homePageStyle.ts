import { baseStyle } from "@constants/baseStyle";

export const homeTitleStyle = {
  ...baseStyle,
  fontSize: { xs: "2rem", md: "2.2rem" },
  letterSpacing: 1,
  lineHeight: "4rem",
};

export const homeDescriptionStyle = {
  ...baseStyle,
  fontSize: { xs: "1.1rem", md: "1.3rem" },
  fontWeight: 200,
  letterSpacing: 0.5,
  lineHeight: "3rem",
};

export const homeRightSectionStyle = {
  fontSize: {
    xs: "6rem",
    sm: "9rem",
    md: "11rem",
    lg: "13rem",
    xl: "16rem",
    xxl: "20rem",
  },
  fontFamily: "Pixelify Sans",
  fontWeight: 300,
  textTransform: "uppercase",
  lineHeight: "1.2em",
  transition: "transform 0.5s ease",
  textAlign: "left",
  cursor: "pointer",
  "&:hover": {
    fontStyle: "italic",
    transform: "translateX(2rem)",
  },
};
