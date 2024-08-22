import { Route, Routes } from "react-router-dom";
import { AppRoutes } from "./enums/AppRoutes";
import Layout from "@components/Layout/Layout";
import AboutPage from "@pages/About/AboutPage";
import ContactPage from "@pages/Contact/ContactPage";
import ErrorPage from "@pages/ErrorPage";
import HomePage from "@pages/Home/HomePage";
import ProjectPage from "@pages/Projects/ProjectPage";
import WorkPage from "@pages/Work/WorkPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="*" element={<ErrorPage />} />
      <Route element={<Layout />}>
        <Route path={AppRoutes.Home} element={<HomePage />} />
        <Route path={AppRoutes.About} element={<AboutPage />} />
        <Route path={AppRoutes.Contact} element={<ContactPage />} />
        <Route path={AppRoutes.Work} element={<WorkPage />} />
        <Route path={AppRoutes.Project} element={<ProjectPage />} />
        <Route path={AppRoutes.Error} element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}
