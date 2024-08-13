import { Route, Routes } from "react-router-dom";
import { AppRoutes } from "./enums/AppRoutes";
import HomePage from "./pages/Home/HomePage";
import AboutPage from "./pages/About/AboutPage";
import ContactPage from "./pages/Contact/ContactPage";
import WorkPage from "./pages/Work/WorkPage";
import Layout from "./components/Layout";
import ErrorPage from "./pages/ErrorPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="*" element={<ErrorPage />} />

      <Route element={<Layout />}>
        <Route path={AppRoutes.Home} element={<HomePage />} />
        <Route path={AppRoutes.About} element={<AboutPage />} />
        <Route path={AppRoutes.Contact} element={<ContactPage />} />
        <Route path={AppRoutes.Work} element={<WorkPage />} />
        <Route path={AppRoutes.Error} element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}
