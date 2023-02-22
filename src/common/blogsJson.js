import BlogImage from "../assets/images/Blog.jpeg";
import BlogText from "./blogText";

export const BlogJson = [
  {
    id: 1,
    img: BlogImage,
    tags: [{ tag: "apartments" }, { tag: "brand" }, { tag: "commercial" }, { tag: "construction" }, { tag: "investing" }, { tag: "real estate" }, { tag: "uncategorized" }],
    title: "ADOZILLION HOMES UNVEILS MONTE CARLO LAGOS",
    date: "August 11, 2022",
    postOwner: "admin",
    post: {
      // title1: "TITLE: ADOZILLION HOMES UNVEILS MONTE CARLO LAGOS",
      post1: BlogText.text,
    },
  },
];
