import { CssBaseline } from "@mui/material";
import "./App.css";
import AppRouter from "./AppRouter";
import ThemeProvider from "./providers/ThemeProvider";
import { HashRouter } from "react-router-dom";
import ErrorBoundary from "./components/ErrorHandling";

function App() {
  return (
    <ErrorBoundary>
      <HashRouter>
        <ThemeProvider>
          <CssBaseline />
          <AppRouter />
        </ThemeProvider>
      </HashRouter>
    </ErrorBoundary>
  );
}

export default App;
