// global loaders
import menuLoader from "./site/loaders/global/menu";
import projectLoader from "./site/loaders/global/projects";
// route loaders
import homepageLoader from "./site/loaders/homepage";
import { blogLoader, blogParamLookup } from "./site/loaders/blogs";
// Types
import { GeneratorConfig, RoutesObj } from "./core/types/config";

const templatesDir = "./site/views/templates";

const routes: Array<RoutesObj> = [
  {
    path: "/",
    template: `${templatesDir}/home.liquid`,
    loaders: [homepageLoader],
  },
  {
    path: "/blog/:slug",
    template: `${templatesDir}/blog-single.liquid`,
    loaders: [blogLoader],
    paramLookup: blogParamLookup,
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
