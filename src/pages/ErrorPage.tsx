import { baseStyle, baseButtonStyle } from "@constants/baseStyle";
import { AppRoutes } from "@enums/AppRoutes";
import { Container, Typography, Button, useTheme } from "@mui/material";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleNavigate = useCallback(() => {
    navigate(AppRoutes.Home);
  }, [navigate]);

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        textAlign: "center",
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Typography sx={{ ...baseStyle, fontSize: "1.7rem" }} gutterBottom>
        Oops! Something went wrong.
      </Typography>

      <Button
        variant="contained"
        sx={{
          ...baseButtonStyle,
          backgroundColor:
            theme.palette.background.default === "#000000"
              ? "#ffffff"
              : "#000000",
          color:
            theme.palette.background.default === "#000000"
              ? "#000000"
              : "#ffffff",
          mt: 4,
        }}
        onClick={handleNavigate}
      >
        Go to Homepage
      </Button>
    </Container>
  );
}
