const titleStyle = {
  fontSize: {
    xs: "4rem",
    sm: "8rem",
    md: "14rem",
    lg: "18rem",
    xl: "20rem",
    xxl: "32rem",
  },
  letterSpacing: 6,
  fontFamily: "Montserrat, sans-serif",
  fontWeight: 300,
};

const subtitleStyle = {
  fontSize: { xs: "2rem", md: "4rem" },
  fontFamily: "Montserrat, sans-serif",
  fontWeight: 300,
  lineHeight: 1.5,
  letterSpacing: 2,
};
const descriptionStyle = {
  fontSize: { xs: "1.1rem", md: "1.3rem" },
  fontFamily: "Montserrat, sans-serif",
  fontWeight: { xs: 400, md: 300 },
  letterSpacing: 0.5,
  lineHeight: 1.8,
};
const categoryStyle = {
  fontSize: { xs: "2.5rem", md: "4rem" },
  fontFamily: "Indie Flower, sans-serif",
  fontWeight: 400,
};
const buttonStyle = {
  fontSize: "1.5rem",
  fontFamily: "Montserrat, sans-serif",
  fontWeight: 600,
  textTransform: "none",
  backgroundColor: "#E8EAF0",
  color: "#000000",
  borderRadius: "2rem",
  transition: "padding .3s ease-in-out",
  padding: "1rem 4rem",
  marginLeft: 2,
  ":hover": {
    padding: "1rem 8rem",
    backgroundColor: "#E8EAF0",
  },
};
const linkStyle = {
  textDecoration: "underline",
  color: "inherit",
  fontSize: "inherit",
  letterSpacing: 1.5,
  ":hover": {
    textDecoration: "line-through",
  },
};

export {
  linkStyle,
  titleStyle,
  subtitleStyle,
  descriptionStyle,
  categoryStyle,
  buttonStyle,
};
