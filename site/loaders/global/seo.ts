// Types
import { LoaderFunction } from "../../../core/types/config";

const seoLoader: LoaderFunction = async (params) => {
  return {
    seo: {
      title: "My Portfolio | William Yallop",
    description: "Welcome to my portfolio. I'm Will Yallop - a fullstack web developer who strives to create snappy, scalable, and accessible web experiences for everyone.",
    keywords: 'Portfolio, Projects',
    robots: 'index, follow',
    author: 'William Yallop',
},
  };
};

export default seoLoader;
