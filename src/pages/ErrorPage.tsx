import { Container, Typography, Button } from "@mui/material";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../enums/AppRoutes";

export default function ErrorPage() {
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
        backgroundColor: "#000000",
        color: "#ffffff",
      }}
    >
      <Typography variant="h3" gutterBottom>
        Oops! Something went wrong.
      </Typography>

      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
        onClick={handleNavigate}
      >
        Go to Homepage
      </Button>
    </Container>
  );
}
