import { baseStyle } from "@constants/baseStyle";

export const titleStyle = {
  fontSize: { xs: "10rem", md: "22rem", lg: "26rem", xl: "32rem" },
  fontFamily: "Indie Flower",
  letterSpacing: 4,
};

export const subtitleStyle = {
  ...baseStyle,
  fontSize: { xs: "1rem", lg: "1.5rem" },
  color: "inherit",
};
