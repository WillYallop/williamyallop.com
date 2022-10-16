let mix = require("laravel-mix");
require('laravel-mix-purgecss');

const siteRoot = "site";
const outputDir = "dist";

mix.disableNotifications();
mix.setPublicPath(outputDir);
mix.setResourceRoot("/");

mix
  .ts(`${siteRoot}/resources/ts/index.ts`, `${outputDir}/js`)
  .sass(`${siteRoot}/resources/scss/main.scss`, `${outputDir}/css`)
  .copyDirectory(`${siteRoot}/static`, outputDir)
    .purgeCss({
        enabled: true,
        content: [
            "site/**/*.ts",
            "site/**/*.liquid",
        ],
    })
    .minify(`${outputDir}/css/main.css`);
            
