import { Outlet, useLocation } from "react-router-dom";
import NavigationBar from "./NavigationBar/NavigationBar";
import { Grid } from "@mui/material";
import { useState, useEffect, useMemo } from "react";
import LoadingPage from "./LoadingPage/LoadingPage";
import { AppRoutes } from "../enums/AppRoutes";

export default function Layout() {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const location = useLocation();

  const [animationClass, setAnimationClass] = useState("leftToRight");

  const backgroundColor = useMemo(() => {
    return location.pathname === AppRoutes.Home ? "#E8EAF0" : "#000000";
  }, [location.pathname]);

  useEffect(() => {
    const isNavigatingToHome = location.pathname === AppRoutes.Home;

    setIsTransitioning(true);
    setAnimationClass(isNavigatingToHome ? "rightToLeft" : "leftToRight");

    const handleTransition = setTimeout(() => {
      setIsTransitioning(false);
    }, 1000);

    return () => {
      clearTimeout(handleTransition);
    };
  }, [location.pathname]);

  return (
    <>
      <LoadingPage
        isTransitioning={isTransitioning}
        animationClass={animationClass}
      />
      <div
        className={`content ${isTransitioning ? "is-transitioning" : ""}`}
        style={{ backgroundColor }}
      >
        {!isTransitioning && (
          <Grid container>
            <Grid item xs={12} md={1} py={1} mx={{ xs: 2, md: 0 }}>
              <NavigationBar />
            </Grid>
            <Grid
              item
              xs={12}
              md={11}
              lg={10}
              mx={{ xs: 2, md: 0 }}
              className={
                location.pathname !== AppRoutes.Home ? "text-blur" : ""
              }
            >
              <Outlet />
            </Grid>
          </Grid>
        )}
      </div>
    </>
  );
}
