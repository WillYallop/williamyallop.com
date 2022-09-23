// Types
import { LoaderFunction } from "../../../core/types/config";
// data
import { projects, categories } from "../projects-single";

const projectLoader: LoaderFunction = async (params) => {
  const projectsData = projects.map((project) => {
    return {
      title: project.title,
      slug: project.slug,
      category: project.category,
      repository: project.repository,
      completed: project.completed,
      summary: project.summary,
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
