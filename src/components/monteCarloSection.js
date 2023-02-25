import React from "react";
import { useNavigate } from "react-router-dom";
import Front from "../assets/images/front1.webp";
import Valentine from "../assets/images/ValentineMC.jpg";
import Layout from "../assets/images/layout.jpeg";
import { yellowColor, redColor, commonStyle } from "../common/commonStyles";
import { ACTIONBUTTONS } from "../constants/constant";
import { MdOutlineNavigateNext } from "react-icons/md";
import { SetModalOpen } from "../features/pictureModalSlice";
import { useDispatch } from "react-redux";

const MonteCarloSection = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
          <img src={Valentine} onClick={() => dispatch(SetModalOpen(Valentine))} className="md:w-[48%] w-[80%] md:mb-0 mb-12" alt="" />
          <img src={Layout} onClick={() => dispatch(SetModalOpen(Layout))} className="md:w-[48%] w-[80%] " alt="" />
        </div>
        <div className="w-full flex flex-wrap justify-between mt-12">
          {ACTIONBUTTONS.map((item, index) => {
            return (
              <button
                key={index}
                className={`md:w-[23%] w-[48%] md:mb-0 mb-6 bg-[${redColor}] flex text-sm justify-center hover:bg-[#e9a921]  items-center capitalize text-white cursor-pointer py-4`}
                onClick={() => {
                  if (item.link) {
                    navigate(item.link);
                  }
                  if (item.fn) {
                    dispatch(item.fn);
                  }
                  if (item.img) {
                    dispatch(SetModalOpen(item.img));
                  }
                }}
              >
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
