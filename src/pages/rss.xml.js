import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_TITLE, SITE_DESCRIPTION } from "../constants";

export async function get(context) {
  const projects = await getCollection("projects");
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: projects.map((project) => ({
      ...project.data,
      link: `/project/${project.slug}/`,
    })),
  });
}
