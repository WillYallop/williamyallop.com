// Types
import { LoaderFunction } from "../../../core/types/config";

interface Project {
  title: string;
  npm: string;
  category:
    | "package"
    | "website"
    | "web_app"
    | "wp_plugin"
    | "api"
    | "boilerplate"
    | "other";
  repository: string;
  completed: boolean;
  summary: string;
}

const projectLoader: LoaderFunction = async (params) => {
  // List all projects
  const projects: Array<Project> = [
    {
      title: "Static Site Generator",
      npm: "",
      category: "boilerplate",
      repository: "https://github.com/WillYallop/static-site-generator",
      completed: true,
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam tristique eros, nec ornare nulla semper sit amet. Praesent venenatis nisi eget sollicitudin sodales.",
    },
    {
      title: "@functionalities/mediakit",
      npm: "https://www.npmjs.com/package/@functionalities/mediakit",
      category: "package",
      repository:
        "https://github.com/WillYallop/functionalities/blob/main/packages/mediakit/README.md",
      completed: true,
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam tristique eros, nec ornare nulla semper sit amet. Praesent venenatis nisi eget sollicitudin sodales.",
    },
    {
      title: "@functionalities/disclosure",
      npm: "https://www.npmjs.com/package/@functionalities/disclosure",
      category: "package",
      repository:
        "https://github.com/WillYallop/functionalities/blob/main/packages/disclosure/README.md",
      completed: true,
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam tristique eros, nec ornare nulla semper sit amet. Praesent venenatis nisi eget sollicitudin sodales.",
    },
    {
      title: "@functionalities/stickyheader",
      npm: "https://www.npmjs.com/package/@functionalities/stickyheader",
      category: "package",
      repository:
        "https://github.com/WillYallop/functionalities/blob/main/packages/stickyheader/README.md",
      completed: true,
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam tristique eros, nec ornare nulla semper sit amet. Praesent venenatis nisi eget sollicitudin sodales.",
    },
    {
      title: "@functionalities/toggler",
      npm: "https://www.npmjs.com/package/@functionalities/toggler",
      category: "package",
      repository:
        "https://github.com/WillYallop/functionalities/blob/main/packages/toggler/README.md",
      completed: true,
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam tristique eros, nec ornare nulla semper sit amet. Praesent venenatis nisi eget sollicitudin sodales.",
    },
    {
      title: "@functionalities/animations",
      npm: "https://www.npmjs.com/package/@functionalities/animations",
      category: "package",
      repository:
        "https://github.com/WillYallop/functionalities/blob/main/packages/animations/README.md",
      completed: true,
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam tristique eros, nec ornare nulla semper sit amet. Praesent venenatis nisi eget sollicitudin sodales.",
    },
    {
      title: "@functionalities/formhandler",
      npm: "https://www.npmjs.com/package/@functionalities/formhandler",
      category: "package",
      repository:
        "https://github.com/WillYallop/functionalities/blob/main/packages/formhandler/README.md",
      completed: true,
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam tristique eros, nec ornare nulla semper sit amet. Praesent venenatis nisi eget sollicitudin sodales.",
    },
    {
      title: "Anyrep Appliance Repairs",
      npm: "https://anyrep.co.uk/",
      category: "website",
      repository: "",
      completed: true,
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam tristique eros, nec ornare nulla semper sit amet. Praesent venenatis nisi eget sollicitudin sodales.",
    },

    {
      title: "Algorithm Visualiser",
      npm: "",
      category: "web_app",
      repository:
        "https://github.com/WillYallop/algorithm_visualiser/tree/master",
      completed: false,
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam tristique eros, nec ornare nulla semper sit amet. Praesent venenatis nisi eget sollicitudin sodales.",
    },
    {
      title: "BP Deploy",
      npm: "",
      category: "wp_plugin",
      repository: "https://github.com/WillYallop/bp-deploy",
      completed: true,
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam tristique eros, nec ornare nulla semper sit amet. Praesent venenatis nisi eget sollicitudin sodales.",
    },
    {
      title: "Cover Maker",
      npm: "",
      category: "web_app",
      repository: "https://github.com/WillYallop/cover-maker",
      completed: true,
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam tristique eros, nec ornare nulla semper sit amet. Praesent venenatis nisi eget sollicitudin sodales.",
    },
  ];

  return {
    projects: {
      list: projects,
      categories: [
        {
          name: "Websites",
          value: "website",
        },
        {
          name: "Web Apps",
          value: "web_app",
        },
        {
          name: "Packages",
          value: "package",
        },
        {
          name: "WordPress Plugins",
          value: "wp_plugin",
        },
        {
          name: "APIs",
          value: "api",
        },
        {
          name: "Boilerplates",
          value: "boilerplate",
        },
        {
          name: "Other",
          value: "other",
        },
      ],
    },
  };
};

export default projectLoader;
