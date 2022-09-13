// Types
import { LoaderFunction } from "../../../core/types/config";

const menuLoader: LoaderFunction = async (params) => {
  return {
    menu: {
      main: [],
    },
  };
};

export default menuLoader;
