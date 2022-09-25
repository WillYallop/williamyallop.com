// Types
import { LoaderFunction } from "../../../core/types/config";
// data
import { projects, categories } from "../../data/projects";

const projectLoader: LoaderFunction = async (params) => {
  // order the projects by date_mofified
  const orderedProjects = projects.sort((a, b) => {
    return (
      new Date(b.date_modified).getTime() - new Date(a.date_modified).getTime()
    );
  });

  const projectsData = orderedProjects.map((project) => {
    return {
      title: project.title,
      slug: project.slug,
      category: project.category,
      repository: project.repository,
      completed: project.completed,
      summary: project.summary,
      images: project.images,
    };
  });

  return {
    projects: {
      list: projectsData,
      categories: categories,
    },
  };
};

export default projectLoader;
