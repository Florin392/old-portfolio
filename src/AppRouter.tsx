import { HashRouter, Route, Routes } from "react-router-dom";
import { AppRoutes } from "./enums/AppRoutes";
import HomePage from "./pages/Home/HomePage";
import AboutPage from "./pages/About/AboutPage";
import ContactPage from "./pages/Contact/ContactPage";
import WorkPage from "./pages/Work/WorkPage";
import Layout from "./components/Layout";

export default function AppRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route path={AppRoutes.Home} element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>

        <Route path={AppRoutes.About}>
          <Route index element={<AboutPage />} />
        </Route>

        <Route path={AppRoutes.Contact}>
          <Route index element={<ContactPage />} />
        </Route>

        <Route path={AppRoutes.Work}>
          <Route index element={<WorkPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
