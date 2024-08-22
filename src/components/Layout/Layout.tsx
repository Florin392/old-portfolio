import { Outlet, useLocation } from "react-router-dom";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import "./layout.css";
import NavigationBar from "@components/NavigationBar/NavigationBar";

export default function Layout() {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (!isInitialLoad) {
      setIsTransitioning(true);
      window.scrollTo(0, 0);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 1500);
    } else {
      setIsInitialLoad(false);
    }
  }, [location.pathname, isInitialLoad]);

  return (
    <>
      {isTransitioning && <div className="full-screen-overlay" />}
      <Grid container>
        <Grid item xs={12} md={0.5} py={1} mx={{ xs: 2, md: 0 }}>
          <NavigationBar />
        </Grid>
        <Grid
          item
          xs={12}
          md={11.5}
          mx={{ xs: 2, md: 0 }}
          px={{ xs: 2, sm: 4, md: 8, lg: 14, xxl: 20 }}
        >
          <Outlet />
        </Grid>
      </Grid>
    </>
  );
}
