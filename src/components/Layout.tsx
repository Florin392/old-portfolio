import { Outlet, useLocation } from "react-router-dom";
import NavigationBar from "./NavigationBar/NavigationBar";
import { Grid } from "@mui/material";
import { useState, useEffect } from "react";
import LoadingPage from "./LoadingPage/LoadingPage";

export default function Layout() {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const location = useLocation();
  const [animationClass, setAnimationClass] = useState("leftToRight");
  const [backgroundColor, setBackgroundColor] = useState("#000000");

  useEffect(() => {
    const pathname = location.pathname;
    const isNavigatingToHome = pathname === "/";

    setIsTransitioning(true);
    setAnimationClass(isNavigatingToHome ? "rightToLeft" : "leftToRight");

    const handleTransition = setTimeout(() => {
      setIsTransitioning(false);
      setBackgroundColor(isNavigatingToHome ? "#E8EAF0" : "#000000");
    }, 1000);

    return () => {
      clearTimeout(handleTransition);
    };
  }, [location]);

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
          <Grid
            container
            // px={{ xs: 2, md: 0, xl: 12 }}
            //  mx={{ xs: 2, md: 0 }}
          >
            <Grid item xs={12} md={1} px={{ md: 2 }}>
              <NavigationBar />
            </Grid>
            <Grid
              item
              xs={12}
              md={11}
              px={{ xs: 2, md: 0, xl: 12 }}
              mx={{ xs: 2, md: 0 }}
              className={location.pathname !== "/" ? "text-blur" : ""}
            >
              <Outlet />
            </Grid>
          </Grid>
        )}
      </div>
    </>
  );
}
