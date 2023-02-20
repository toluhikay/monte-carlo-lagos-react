import React from "react";
import { useNavigate } from "react-router-dom";
import { yellowColor, redColor } from "../common/commonStyles";
import { BsArrowRight } from "react-icons/bs";
import { BlogJson } from "../common/blogsJson";

const Blog = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[700px] flex flex-col justify-center items-center md:py-[150px] py-[100px]">
      <div className="w-[70%] flex flex-col items-center">
        <p className={`text-[${yellowColor}] italic text-3xl capitalize pb-6 text-center`}>{BlogJson[0].title.toLowerCase()}</p>
        <p className="pb-6 font-extrabold text-[10px]">
          By <span className={`uppercase text-[${redColor}]`}>{BlogJson[0].postOwner} </span> / <span className={`text-[${redColor}]`}> {BlogJson[0].date}</span>
        </p>
        <span className={`w-[30%] h-[2px] bg-[#e9a92e] mb-6`}></span>
        <div className={`w-full`}>
          <img src={BlogJson[0].img} className="w-full mb-6" alt="" />
        </div>
        <p className="mb-6 flex flex-wrap">
          {BlogJson[0].tags.map((item, index) => {
            return (
              <p key={index} className={`uppercase font-bold mr-5 flex items-center  md:text-xl text-sm ${index % 2 === 0 ? "text-[#c31516]" : "text-[#e9a92e]"}`}>
                {item.tag}
                <p className={`h-2 w-2 rounded-full ml-2 ${index % 2 === 0 ? "bg-[#c31516]" : "bg-[#e9a92e]"}`}></p>
              </p>
            );
          })}
        </p>
        <p className="tracking-wider mb-6">{BlogJson[0].post.post1.slice(0, 500)}......</p>
        <button className="border border-[#c31516] py-2 px-[10px] flex items-center text-[#e9a92e] uppercase tracking-widest" onClick={() => navigate("/blog/post")}>
          Read More <BsArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Blog;
