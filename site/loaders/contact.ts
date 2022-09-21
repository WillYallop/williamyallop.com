// Types
import { LoaderFunction } from "../../core/types/config";

const contactLoader: LoaderFunction = async () => {
  return {
    contact: {
      title: "Contact",
      description: "Contact me",
    },
  };
};

export default contactLoader;
