let mix = require("laravel-mix");

const siteRoot = "site";
const outputDir = "dist";

mix.disableNotifications();
mix.setPublicPath(outputDir);
mix.setResourceRoot("/");

mix
  .ts(`${siteRoot}/ts/index.ts`, `${outputDir}/js`)
  .sass(`${siteRoot}/scss/main.scss`, `${outputDir}/css`)
  .copyDirectory(`${siteRoot}/static`, outputDir);
