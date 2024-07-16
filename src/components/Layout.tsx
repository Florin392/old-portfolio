import { Outlet } from "react-router-dom";
import NavigationBar from "./NavigationBar/NavigationBar";
import { Grid } from "@mui/material";

export default function Layout() {
  return (
    <Grid container>
      <Grid item xs={12} md={1} px={2}>
        <NavigationBar />
      </Grid>
      <Grid item xs={12} md={11} px={{ xl: 12 }}>
        <Outlet />
      </Grid>
    </Grid>
  );
}
