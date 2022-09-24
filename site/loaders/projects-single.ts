import fs from "fs-extra";
import path from "path";
// Types
import { LoaderFunction, ParamTableLookup } from "../../core/types/config";

type Categories =
  | "package"
  | "website"
  | "web_app"
  | "wp_plugin"
  | "api"
  | "boilerplate"
  | "other";

interface Project {
  title: string;
  npm?: string;
  slug: string;
  category: Categories;
  repository: string;
  completed: boolean;
  summary: string;
  markdownPath?: string;
  markdown?: string;
  technologies?: Array<string>;
  preview?: string;
  images?: {
    thumbnail?: string;
    preview?: string;
    gallery?: Array<{
      src: string;
      alt: string;
    }>;
  };
}

interface CategoriesObj {
  name: string;
  value: Categories;
}

// List all projects
export const projects: Array<Project> = [
  {
    title: "Static Site Generator",
    slug: "static-site-generator",
    category: "boilerplate",
    repository: "https://github.com/WillYallop/static-site-generator",
    completed: true,
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam tristique eros, nec ornare nulla semper sit amet. Praesent venenatis nisi eget sollicitudin sodales.",
    markdownPath: "/projects/static-site-generator.md",
  },
  {
    title: "@functionalities/mediakit",
    slug: "functionalities",
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
    slug: "functionalities",
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
    slug: "functionalities",
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
    slug: "functionalities",
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
    slug: "functionalities",
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
    slug: "functionalities",
    npm: "https://www.npmjs.com/package/@functionalities/formhandler",
    category: "package",
    repository:
      "https://github.com/WillYallop/functionalities/blob/main/packages/formhandler/README.md",
    completed: true,
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam tristique eros, nec ornare nulla semper sit amet. Praesent venenatis nisi eget sollicitudin sodales.",
  },
  {
    title: "Anyrep",
    slug: "anyrep",
    category: "website",
    repository: "",
    completed: true,
    summary:
      "Anyrep is an appliance repairs company based in Norwich, Norfolk. They needed a website to showcase their services and allow customers to contact them.",
    technologies: ["Deno", "Fresh", "Typescript", "TailwindCSS"],
    preview: "https://anyrep.co.uk",
    images: {
      thumbnail: "anyrep/thumbnail.jpg",
      preview: "anyrep/preview.jpg",
      gallery: [
        {
          src: "anyrep/gallery-services.jpg",
          alt: "Anyrep services page",
        },
        {
          src: "anyrep/gallery-homemobile.jpg",
          alt: "Anyrep homepage on mobile",
        },
        {
          src: "anyrep/gallery-lighthouse.jpg",
          alt: "Anyrep google lighthouse score",
        },
      ],
    },
    markdownPath: "/projects/anyrep.md",
  },

  {
    title: "Algorithm Visualiser",
    slug: "algorithm-visualiser",
    category: "web_app",
    repository:
      "https://github.com/WillYallop/algorithm_visualiser/tree/master",
    completed: false,
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam tristique eros, nec ornare nulla semper sit amet. Praesent venenatis nisi eget sollicitudin sodales.",
  },
  {
    title: "BP Deploy",
    slug: "bp-deploy",
    category: "wp_plugin",
    repository: "https://github.com/WillYallop/bp-deploy",
    completed: true,
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam tristique eros, nec ornare nulla semper sit amet. Praesent venenatis nisi eget sollicitudin sodales.",
  },
  {
    title: "Cover Maker",
    slug: "cover-maker",
    category: "web_app",
    repository: "https://github.com/WillYallop/cover-maker",
    completed: true,
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam tristique eros, nec ornare nulla semper sit amet. Praesent venenatis nisi eget sollicitudin sodales.",
  },
];

// Project categories
export const categories: Array<CategoriesObj> = [
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
];

export const projectsParamLookup: ParamTableLookup = async () =>
  projects.map((project) => {
    return {
      slug: project.slug,
    };
  });

export const projectsSingleLoader: LoaderFunction = async (params) => {
  if (params !== undefined) {
    const project = projects.find((project) => project.slug === params.slug);
    if (project !== undefined) {
      const pathLoc = path.resolve(
        __dirname,
        `../resources/markdown/${project.markdownPath}`
      );
      let markdown = "";
      const fileExists = fs.existsSync(path.resolve(pathLoc));
      if (fileExists) {
        markdown = await fs.readFile(pathLoc, "utf8");
      }
      return {
        project: {
          data: {
            ...project,
            markdown,
          },
        },
      };
    }
    return null;
  }
  return null;
};
