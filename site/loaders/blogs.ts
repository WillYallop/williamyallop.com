// Types
import { LoaderFunction, ParamTableLookup } from "../../core/types/config";
// Data
import { blogs, LIMIT } from "../data/blogs";

// param lookup
export const blogsGroupParamLookup: ParamTableLookup = async () => {
  const total = Math.ceil(blogs.length / LIMIT);
  const range = [...Array(total).keys()];
  const params = range.map((i) => {
    return {
      limit: `${LIMIT}`,
      offset: `${i * LIMIT}`,
    };
  });
  return params;
};

// get blog group data for loaders
const getBlogsGroup = (offset: string, limit: string) => {
  const start = parseInt(offset);
  const end = start + parseInt(limit);
  const blogsGroup = blogs.slice(start, end);

  const previouseUrl =
    offset === limit ? "/blogs" : `/blogs/${limit}/${start - parseInt(limit)}`;
  const previous = start > 0 ? previouseUrl : null;

  return {
    blogs: {
      title: "Blogs",
      description:
        "Learn about my current projects and tech that im experimenting with.",
      list: blogsGroup,
      next: blogs.length > end ? `/blogs/${limit}/${end}` : null,
      previous: previous,
    },
  };
};

// single blog loader for dynamic route
export const blogsGroupLoader: LoaderFunction = async (params) => {
  if (!params) return;
  if (!params.limit || !params.offset) return;
  const { limit, offset } = params;
  return getBlogsGroup(offset, limit);
};

// single blog loader
const blogsLoader: LoaderFunction = async () => {
  return getBlogsGroup("0", `${LIMIT}`);
};

export default blogsLoader;
