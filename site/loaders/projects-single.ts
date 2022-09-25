import fs from "fs-extra";
import path from "path";
// Types
import { LoaderFunction, ParamTableLookup } from "../../core/types/config";
// Data
import { projects } from "../data/projects";

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
