// Types
import { LoaderFunction } from "../../core/types/config";

const homepageLoader: LoaderFunction = async () => {
  return {
    home: {
      title: "Projects",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum, justo non fringilla consequat, erat elit sollicitudin sem.",
    },
  };
};

export default homepageLoader;
