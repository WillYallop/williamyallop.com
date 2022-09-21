// Types
import { LoaderFunction } from "../../core/types/config";

const blogsLoader: LoaderFunction = async () => {
  return {
    blogs: {
      title: "Blogs",
      description: "A list of blogs I have written",
    },
  };
};

export default blogsLoader;
