import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://williamyallop.com",
  trailingSlash: "always",
  server: {
    host: true,
  },
  integrations: [tailwind(), image(), sitemap(), prefetch(), mdx()],
});
