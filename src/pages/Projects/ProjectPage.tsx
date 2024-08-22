import ErrorPage from "@pages/ErrorPage";
import { useParams } from "react-router-dom";
import { projectsData } from "./projectsData";
import ProjectPageSkeleton from "./ProjectPageSkeleton/ProjectPageSkeleton";

export default function ProjectPage() {
  const { projectId } = useParams<{ projectId: string }>();

  const project = projectId ? projectsData[projectId] : null;

  if (!project) {
    return <ErrorPage />;
  }

  return (
    <ProjectPageSkeleton
      projectTitle={project.projectTitle}
      projectTitleTextColor={project.projectTitleTextColor}
      projectSubTitle={project.projectSubTitle}
      scope={project.scope}
      highlights={project.highlights}
      projectUrl={project.projectUrl}
      projectHomePageImage={project.projectHomePageImage}
      projectDescription={project.projectDescription}
      projectMultiplePhotosImage={project.projectMultiplePhotosImage}
      projectLearnings={project.projectLearnings}
    />
  );
}
