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
  repository?: string;
  completed: boolean;
  summary: string;
  markdownPath?: string;
  markdown?: string;
  technologies?: Array<string>;
  preview?: string;
  date_created: string;
  date_modified: string;
  date_published?: string;
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
    title: "Anyrep",
    slug: "anyrep",
    date_created: new Date("2022-08-03").toISOString(),
    date_modified: new Date("2022-08-28").toISOString(),
    date_published: new Date("2022-08-20").toISOString(),
    category: "website",
    repository: "https://github.com/WillYallop/anyrep_fresh_2022",
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
    date_created: new Date("2022-04-17").toISOString(),
    date_modified: new Date("2022-05-12").toISOString(),
    category: "web_app",
    repository: "https://github.com/WillYallop/algorithm_visualiser",
    completed: false,
    summary:
      "A small web app to display pathfinding and sorting algorithms. This project is still a work in progress and is intended as a learning experience.",
    technologies: ["Node", "Vite", "Typescript", "SCSS"],
    preview: "https://algorithm-visualiser.williamyallop.com",
    images: {
      thumbnail: "algorithm-visualiser/thumbnail.jpg",
      preview: "algorithm-visualiser/preview.jpg",
      gallery: [
        {
          src: "algorithm-visualiser/gallery-dijkstraprogress.jpg",
          alt: "Dijkstra's algorithm in progress",
        },
        {
          src: "algorithm-visualiser/gallery-dijkstracomplete.jpg",
          alt: "Dijkstra's algorithm complete",
        },
      ],
    },
    markdownPath: "/projects/algorithm-visualiser.md",
  },
  {
    title: "Cover Maker",
    slug: "cover-maker",
    date_created: new Date("2021-08-29").toISOString(),
    date_modified: new Date("2021-08-30").toISOString(),
    category: "web_app",
    repository: "https://github.com/WillYallop/cover-maker",
    completed: true,
    summary:
      "Cover maker is a graphic design tool for making playlist cover artwork. It has templates, media, shapes and text and allows you to export as an image or JSON.",
    technologies: ["Node", "JS", "SCSS", "Webpack"],
    preview: "https://cover-maker.williamyallop.com",
    images: {
      thumbnail: "cover-maker/thumbnail.jpg",
      preview: "cover-maker/preview.jpg",
      gallery: [
        {
          src: "cover-maker/gallery-savework.jpg",
          alt: "An exmaple exporting your playlist cover",
        },
        {
          src: "cover-maker/gallery-loadfile.jpg",
          alt: "An example of loading a saved file",
        },
      ],
    },
    markdownPath: "/projects/cover-maker.md",
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
