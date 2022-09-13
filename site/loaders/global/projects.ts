// Types
import { LoaderFunction } from "../../../core/types/config";

interface Project {
  title: string;
  previewUrl: string;
  category:
    | "package"
    | "website"
    | "web_app"
    | "wp_plugin"
    | "wp_theme"
    | "shopify_theme"
    | "api"
    | "boilerplate"
    | "other";
  repository: string;
  completed: boolean;
}

const projectLoader: LoaderFunction = async (params) => {
  // List all projects
  const projects: Array<Project> = [
    {
      title: "Static Site Generator",
      previewUrl: "",
      category: "boilerplate",
      repository: "https://github.com/WillYallop/static-site-generator",
      completed: true,
    },
    {
      title: "@functionalities/mediakit",
      previewUrl: "https://www.npmjs.com/package/@functionalities/mediakit",
      category: "package",
      repository:
        "https://github.com/WillYallop/functionalities/blob/main/packages/mediakit/README.md",
      completed: true,
    },
    {
      title: "@functionalities/disclosure",
      previewUrl: "https://www.npmjs.com/package/@functionalities/disclosure",
      category: "package",
      repository:
        "https://github.com/WillYallop/functionalities/blob/main/packages/disclosure/README.md",
      completed: true,
    },
    {
      title: "@functionalities/stickyheader",
      previewUrl: "https://www.npmjs.com/package/@functionalities/stickyheader",
      category: "package",
      repository:
        "https://github.com/WillYallop/functionalities/blob/main/packages/stickyheader/README.md",
      completed: true,
    },
    {
      title: "Anyrep Appliance Repairs",
      previewUrl: "https://anyrep.co.uk/",
      category: "website",
      repository: "",
      completed: true,
    },

    {
      title: "Algorithm Visualiser",
      previewUrl: "",
      category: "web_app",
      repository:
        "https://github.com/WillYallop/algorithm_visualiser/tree/master",
      completed: false,
    },
    {
      title: "BP Deploy",
      previewUrl: "",
      category: "wp_plugin",
      repository: "https://github.com/WillYallop/bp-deploy",
      completed: true,
    },
    {
      title: "Cover Maker",
      previewUrl: "",
      category: "web_app",
      repository: "https://github.com/WillYallop/cover-maker",
      completed: true,
    },
  ];

  return {
    projects: projects,
  };
};

export default projectLoader;
