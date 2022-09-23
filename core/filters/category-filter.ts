import { Liquid } from "liquidjs";

export const registerCategoryFilter = (engine: Liquid) => {
  engine.registerFilter("category-filter", (str) => {
    return str.replace(/_/g, " ");
  });
};
export default registerCategoryFilter;
