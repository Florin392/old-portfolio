import { CssBaseline } from "@mui/material";
import "./App.css";
import AppRouter from "./AppRouter";
import ThemeProvider from "./providers/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
