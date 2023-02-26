import React from "react";
import { yellowColor, redColor } from "../common/commonStyles";
import { BlogJson } from "../common/blogsJson";
import { Helmet } from "react-helmet-async";

const SingleBlog = () => {
  return (
    <div className="min-h-[700px] flex flex-col justify-center items-center md:py-[150px] py-[100px]">
      <Helmet prioritizeSeoTags>
        <title>ADOZILLION HOMES UNVEILS MONTE CARLO LAGOS</title>
        <meta name="description" content="ADOZILLION HOMES UNVEILS MONTE CARLO LAGOS" />
        <link rel="canonical" href="/blog/post" />
      </Helmet>
      <div className="md:w-[50%] w-[80%] flex flex-col items-center">
        <p className={`text-[${yellowColor}] italic md:text-3xl text-2xl capitalize pb-6 text-center`}>{BlogJson[0].title.toLowerCase()}</p>
        <p className="pb-6 font-extrabold text-[10px]">
          By <span className={`uppercase text-[${redColor}]`}>{BlogJson[0].postOwner} </span> / <span className={`text-[${redColor}]`}> {BlogJson[0].date}</span>
        </p>
        <span className={`w-[30%] h-[2px] bg-[#e9a92e] mb-6`}></span>
        <div className={`w-full`}>
          <img src={BlogJson[0].img} className="w-full mb-6" alt="" />
        </div>
        <div>
          <p className="text-[#e9a92e] my-6 text-xl tracking-widest">{BlogJson[0].post.title1}</p>
          <p className="tracking-wider text-justify" dangerouslySetInnerHTML={{ __html: BlogJson[0].post.post1 }} />
        </div>
        <div>
          <p className="text-[#e9a92e] my-6 text-xl tracking-widest">{BlogJson[0].post.title2}</p>
          <p className="tracking-wider text-justify">{BlogJson[0].post.post2}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
