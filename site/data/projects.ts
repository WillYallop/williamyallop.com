type Categories =
  | "package"
  | "website"
  | "web_app"
  | "WP_plugin"
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
  {
    title: "Static Site Generator",
    slug: "static-site-generator",
    date_created: new Date("2022-09-06").toISOString(),
    date_modified: new Date("2022-09-24").toISOString(),
    date_published: new Date("2022-09-11").toISOString(),
    category: "boilerplate",
    repository: "https://github.com/WillYallop/static-site-generator",
    completed: true,
    summary:
      "This is a minimal, but very flexible and powerful static site generator that is built around Express and LiquidJS. It also has filters for image optimisation and markdown.",
    technologies: ["Node", "Typescript", "Express", "LiquidJS", "FS", "Sharp"],
    images: {
      thumbnail: "static-site-generator/thumbnail.jpg",
      preview: "static-site-generator/preview.jpg",
      gallery: [
        {
          src: "static-site-generator/gallery-github-preview.jpg",
          alt: "A preview of the github repository",
        },
        {
          src: "static-site-generator/gallery-tags-filters.jpg",
          alt: "The tags and filters page, explaining what's available in LiquidJS",
        },
        {
          src: "static-site-generator/gallery-mobile.jpg",
          alt: "An example of the site on mobile",
        },
      ],
    },
    markdownPath: "/projects/static-site-generator.md",
  },
  {
    title: "BP Deploy",
    slug: "bp-deploy",
    date_created: new Date("2022-09-01").toISOString(),
    date_modified: new Date("2022-09-08").toISOString(),
    date_published: new Date("2022-09-03").toISOString(),
    category: "WP_plugin",
    repository: "https://github.com/WillYallop/bp-deploy",
    completed: true,
    summary:
      "BP deploy is a WordPress plugin that allows you to trigger Bitbucket pipelines remotely. It has a simple interface where you can deploy and see previous deployments.",
    technologies: ["PHP", "React", "SCSS", "WP"],
    images: {
      thumbnail: "bp-deploy/thumbnail.jpg",
      preview: "bp-deploy/preview.jpg",
      gallery: [
        {
          src: "bp-deploy/gallery-home.jpg",
          alt: "The home page of the plugin",
        },
        {
          src: "bp-deploy/preview.jpg",
          alt: "The deployment history page",
        },
        {
          src: "bp-deploy/gallery-settings.jpg",
          alt: "The settings page",
        },
      ],
    },
    markdownPath: "/projects/bp-deploy.md",
  },
  {
    title: "@functionalities/toggler",
    slug: "toggler",
    date_created: new Date("2022-08-20").toISOString(),
    date_modified: new Date("2022-09-24").toISOString(),
    date_published: new Date("2022-09-24").toISOString(),
    category: "package",
    repository:
      "https://github.com/WillYallop/functionalities/tree/main/packages/toggler",
    npm: "https://www.npmjs.com/package/@functionalities/toggler",
    completed: true,
    summary:
      "Toggler is a frontend utility package that's sole purpose is to make class toggling easier. It's 100% markup/attribute based, so no extra JS/TS is required!",
    technologies: ["Typescript"],
    images: {
      thumbnail: "functionalities/toggler_thumbnail.jpg",
      preview: "functionalities/preview.jpg",
    },
    markdownPath: "/projects/functionalities-toggler.md",
  },
  {
    title: "@functionalities/stickyheader",
    slug: "stickyheader",
    date_created: new Date("2022-08-20").toISOString(),
    date_modified: new Date("2022-09-24").toISOString(),
    date_published: new Date("2022-09-24").toISOString(),
    category: "package",
    repository:
      "https://github.com/WillYallop/functionalities/tree/main/packages/stickyheader",
    npm: "https://www.npmjs.com/package/@functionalities/stickyheader",
    completed: true,
    summary:
      "Sticky header is a small frontend utility package for implementing a sticky header. It has three states for being at the top of the page, scrolling down and up.",
    technologies: ["Typescript"],
    images: {
      thumbnail: "functionalities/stickyheader_thumbnail.jpg",
      preview: "functionalities/preview.jpg",
    },
    markdownPath: "/projects/functionalities-stickyheader.md",
  },
  {
    title: "@functionalities/animations",
    slug: "animations",
    date_created: new Date("2022-08-20").toISOString(),
    date_modified: new Date("2022-09-24").toISOString(),
    date_published: new Date("2022-09-24").toISOString(),
    category: "package",
    repository:
      "https://github.com/WillYallop/functionalities/tree/main/packages/animations",
    npm: "https://www.npmjs.com/package/@functionalities/animations",
    completed: true,
    summary:
      "Animations is a frontend animation utility package. It doesn't have any animations included, but it uses an intersection observer at its core to trigger classes.",
    technologies: ["Typescript"],
    images: {
      thumbnail: "functionalities/animations_thumbnail.jpg",
      preview: "functionalities/preview.jpg",
    },
    markdownPath: "/projects/functionalities-animations.md",
  },
  {
    title: "@functionalities/formhandler",
    slug: "formhandler",
    date_created: new Date("2022-08-20").toISOString(),
    date_modified: new Date("2022-09-24").toISOString(),
    date_published: new Date("2022-09-24").toISOString(),
    category: "package",
    repository:
      "https://github.com/WillYallop/functionalities/tree/main/packages/formhandler",
    npm: "https://www.npmjs.com/package/@functionalities/formhandler",
    completed: true,
    summary:
      "Form handler is a wrapper for sending and handling form errors and successes. It uses the browser's built-in input validation to check the form submitting.",
    technologies: ["Typescript"],
    images: {
      thumbnail: "functionalities/formhandler_thumbnail.jpg",
      preview: "functionalities/preview.jpg",
    },
    markdownPath: "/projects/functionalities-formhandler.md",
  },
  {
    title: "@functionalities/disclosure",
    slug: "disclosure",
    date_created: new Date("2022-08-20").toISOString(),
    date_modified: new Date("2022-09-24").toISOString(),
    date_published: new Date("2022-09-24").toISOString(),
    category: "package",
    repository:
      "https://github.com/WillYallop/functionalities/tree/main/packages/disclosure",
    npm: "https://www.npmjs.com/package/@functionalities/disclosure",
    completed: true,
    summary:
      "Disclosure is a minimal frontend package for implementing accessible, lightweight disclosure components.",
    technologies: ["Typescript"],
    images: {
      thumbnail: "functionalities/disclosure_thumbnail.jpg",
      preview: "functionalities/preview.jpg",
    },
    markdownPath: "/projects/functionalities-disclosure.md",
  },
  {
    title: "@functionalities/mediakit",
    slug: "mediakit",
    date_created: new Date("2022-08-20").toISOString(),
    date_modified: new Date("2022-10-13").toISOString(),
    date_published: new Date("2022-09-24").toISOString(),
    category: "package",
    repository:
      "https://github.com/WillYallop/functionalities/tree/main/packages/mediakit",
    npm: "https://www.npmjs.com/package/@functionalities/mediakit",
    completed: true,
    summary:
      "MediaKit is a backend utility package for processing, saving, getting and streaming images, files and video! We support both local and AWS S3 for storage.",
    technologies: ["Typescript", "Express", "AWS S3", "Sharp"],
    images: {
      thumbnail: "functionalities/mediakit_thumbnail.jpg",
      preview: "functionalities/preview.jpg",
    },
    markdownPath: "/projects/functionalities-mediakit.md",
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
    value: "WP_plugin",
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
