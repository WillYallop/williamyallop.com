// Types
import { LoaderFunction } from "../../core/types/config";

const homepageLoader: LoaderFunction = async () => {
  return {
    home: {
      title: "Projects",
      description: "A list of projects I have worked on",
    },
  };
};

export default homepageLoader;
