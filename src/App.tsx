import { CssBaseline } from "@mui/material";
import "./App.css";
import AppRouter from "./AppRouter";
import ThemeProvider from "./providers/ThemeProvider";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <ThemeProvider>
        <CssBaseline />
        <AppRouter />
      </ThemeProvider>
    </Router>
  );
}

export default App;
