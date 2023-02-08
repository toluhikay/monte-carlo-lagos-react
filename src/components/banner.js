import React from "react";
import BannerImg from "../assets/images/banner.jpeg";

const Banner = () => {
  return (
    <div className="w-full">
      <img src={BannerImg} className="w-full h-auto" alt="" />
    </div>
  );
};

export default Banner;
