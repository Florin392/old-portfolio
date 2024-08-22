export const baseStyle = {
  fontSize: "1rem",
  fontFamily: "Montserrat, sans-serif",
  fontWeight: 400,
  letterSpacing: 2,
};

export const baseButtonStyle = {
  ...baseStyle,
  fontSize: "1.2rem",
  fontWeight: 300,
  textTransform: "none",
  backgroundColor: "#000000",
  color: "#ffffff",
  borderRadius: "2rem",
  transition: "padding .3s ease-in-out",
  padding: "1rem 4rem",
  marginLeft: 2,
  ":hover": {
    padding: { xs: "1rem 6rem", md: "1rem 8rem" },
    backgroundColor: "#000000",
  },
};
