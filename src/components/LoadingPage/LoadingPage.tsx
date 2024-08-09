import { Grid } from "@mui/material";
import "./LoadingPage.css";

interface LoadingPageProps {
  isTransitioning: boolean;
  animationClass?: string;
}

export default function LoadingPage({
  isTransitioning,
  animationClass,
}: LoadingPageProps) {
  return (
    <Grid
      container
      className={`loadingScreen ${animationClass} ${
        isTransitioning ? "active" : ""
      }`}
    />
  );
}
