import React from "react";
import { useNavigate } from "react-router-dom";
import { yellowColor, redColor } from "../common/commonStyles";
import { BsArrowRight } from "react-icons/bs";
import { BlogJson } from "../common/blogsJson";
import SEO from "../common/seo";

const Blog = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[700px] flex flex-col justify-center items-center md:py-[150px] py-[100px]">
      <SEO title="Adozillion Homes Unveils Monte Carlo Lagos" description="Beachfront, Real estate, Epe, Estates, Resort, Residences" name="Adozillion Homes" type="article" />
      <div className="w-[70%] flex flex-col items-center">
        <p className={`text-[${yellowColor}] italic md:text-3xl text-2xl capitalize pb-6 text-center`}>{BlogJson[0].title.toLowerCase()}</p>
        <p className="pb-6 font-extrabold text-[10px]">
          By <span className={`uppercase text-[${redColor}]`}>{BlogJson[0].postOwner} </span> / <span className={`text-[${redColor}]`}> {BlogJson[0].date}</span>
        </p>
        <span className={`w-[30%] h-[2px] bg-[#e9a92e] mb-6`}></span>
        <div className={`w-full`}>
          <img src={BlogJson[0].img} className="w-full mb-6" alt="" />
        </div>
        <div className="mb-6 flex flex-wrap">
          {BlogJson[0].tags.map((item, index) => {
            return (
              <p key={index} className={`uppercase font-bold mr-5 flex items-center  md:text-base text-sm text-[#e9a92e]`}>
                {item.tag}
                <span className={`h-2 w-2 rounded-full ml-2 bg-[#e9a92e]`}></span>
              </p>
            );
          })}
        </div>
        <div className="tracking-wider mb-6" dangerouslySetInnerHTML={{ __html: BlogJson[0].post.post1.slice(0, 500) }} />
        <button className="border border-[#c31516] py-2 px-[10px] flex items-center text-[#e9a92e] uppercase tracking-widest" onClick={() => navigate("/blog/post")}>
          Read More <BsArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Blog;
