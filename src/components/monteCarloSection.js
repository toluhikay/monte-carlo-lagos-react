import React from "react";
import Front from "../assets/images/Front1.jpg";
import Layout1 from "../assets/images/layout1.jpeg";
import Layout from "../assets/images/layout.jpeg";
import { yellowColor, redColor, commonStyle } from "../common/commonStyles";
import { ACTIONBUTTONS } from "../constants/constant";
import { MdOutlineNavigateNext } from "react-icons/md";

const MonteCarloSection = () => {
  return (
    <div className={`md:py-28 py-16 ${commonStyle} bg-[#c4c4c450]`}>
      <p className={`md:text-5xl mb-12 mt-12 text-3xl font-bold text-[${redColor}] text-center`}>
        Monte Carlo <span className={`text-[${yellowColor}]`}>Lagos</span>
      </p>
      <div className="w-full flex justify-center items-center mb-12">
        <img src={Front} alt="" className="md:w-[40%] w-[80%]" />
      </div>
      <div className={`flex items-center flex-col py-12`}>
        <p className={`py-6 font-bold md:text-3xl mb-12 text-[${yellowColor}] text-2xl`}>
          Monte <span className={`text-[${redColor}]`}>Carlo Layout</span>
        </p>
        <div className={`w-full flex md:flex-row flex-col items-center justify-between`}>
          <img src={Layout1} className="md:w-[48%] w-[80%] md:mb-0 mb-12" alt="" />
          <img src={Layout} className="md:w-[48%] w-[80%] " alt="" />
        </div>
        <div className="w-full flex flex-wrap justify-between mt-12">
          {ACTIONBUTTONS.map((item, index) => {
            return (
              <button key={index} className={`md:w-[23%] w-[48%] md:mb-0 mb-6 bg-[${redColor}] flex text-sm justify-center hover:bg-[#e9a921]  items-center capitalize text-white cursor-pointer py-4`}>
                {item.action} <MdOutlineNavigateNext className="text-xl" />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MonteCarloSection;
