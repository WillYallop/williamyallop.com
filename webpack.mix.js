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
        whitelist: [
            'active',
            'hljs-keyword',
            'hljs-string',
            'hljs-number',
            'hljs-selector-tag',
            'hljs-subst',
            'hljs-title',
            'hljs-section',
            'hljs-attribute',
            'hljs-literal',
            'hljs-built_in',
            'hljs-bullet',
            'hljs-code',
            'hljs-addition',
            'hljs-regexp',
            'hljs-symbol',
            'hljs-variable',
            'hljs-template-variable',
            'hljs-link',
            'hljs-meta',
            'hljs-deletion',
            'hljs-selector-attr',
            'hljs-selector-pseudo',
            'hljs-type',
            'hljs-quote',
            'hljs-selector-id',
            'hljs-selector-class',
            'hljs-emphasis',
            'hljs-strong',
            'hljs-builtin-name',
            'hljs-comment',
            'hljs-doctag',
            'hljs-formula',
            'hljs-name',
            'hljs-params',
            'hljs-property',
            'hljs-qualifier'
        ],
        whitelistPatterns: [
            /active$/,
            /hljs-/,
        ],
    })
    .minify(`${outputDir}/css/main.css`);
            
