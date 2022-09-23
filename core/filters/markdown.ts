import { Liquid } from "liquidjs";
import MarkdownIt from "markdown-it";

const md = new MarkdownIt();

export const registerMarkdownFilter = (engine: Liquid) => {
  engine.registerFilter("markdown", (str) => {
    if (str) return md.render(str);
    else return "";
  });
};
export default registerMarkdownFilter;
