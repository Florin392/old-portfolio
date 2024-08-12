import { CssBaseline } from "@mui/material";
import "./App.css";
import AppRouter from "./AppRouter";
import ThemeProvider from "./providers/ThemeProvider";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <ThemeProvider>
        <CssBaseline />
        <AppRouter />
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;
