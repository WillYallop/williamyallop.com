// global loaders
import menuLoader from "./site/loaders/global/menu";
import projectLoader from "./site/loaders/global/projects";
// route loaders
import homepageLoader from "./site/loaders/homepage";
import contactLoader from "./site/loaders/contact";
import blogsLoader from "./site/loaders/blogs";
import {
  projectsSingleLoader,
  projectsParamLookup,
} from "./site/loaders/projects-single";
import {
  blogSingleLoader,
  blogsParamLookup,
} from "./site/loaders/blogs-single";
// Types
import { GeneratorConfig, RoutesObj } from "./core/types/config";

const templatesDir = "./site/views/templates";

const routes: Array<RoutesObj> = [
  {
    path: "/",
    template: `${templatesDir}/projects.liquid`,
    loaders: [homepageLoader],
  },
  {
    path: "/project/:slug",
    template: `${templatesDir}/project-single.liquid`,
    loaders: [projectsSingleLoader],
    paramLookup: projectsParamLookup,
  },
  {
    path: "/contact",
    template: `${templatesDir}/contact.liquid`,
    loaders: [contactLoader],
  },
  {
    path: "/blogs",
    template: `${templatesDir}/blogs.liquid`,
    loaders: [blogsLoader],
  },
  {
    path: "/blog/:slug",
    template: `${templatesDir}/blog-single.liquid`,
    loaders: [blogSingleLoader],
    paramLookup: blogsParamLookup,
  },
];

const config: GeneratorConfig = {
  routes,
  globalLoaders: [menuLoader, projectLoader],
  outputDir: "dist",
  siteRoot: "site",
  siteUrl: "http://localhost:3000",
};
export default config;
