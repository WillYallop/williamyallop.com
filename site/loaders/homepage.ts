// Types
import { LoaderFunction } from "../../core/types/config";

const homepageLoader: LoaderFunction = async () => {
  return {
    home: {
      title: "My projects",
      description:
        "Hi, my name is Will and I'm a fullstack developer. Below you'll find a selection of projects I've created over the years, ranging from websites, web apps, libraries and everything else in between. ",
    },
  };
};

export default homepageLoader;
