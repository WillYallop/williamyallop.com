import { Liquid } from "liquidjs";
import MarkdownIt from "markdown-it";
import hljs from "highlight.js";

const md = new MarkdownIt({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(str, { language: lang }).value;
      } catch (__) {}
    }
    return "";
  },
});

export const registerMarkdownFilter = (engine: Liquid) => {
  engine.registerFilter("markdown", (str) => {
    if (str) return md.render(str);
    else return "";
  });
};
export default registerMarkdownFilter;
