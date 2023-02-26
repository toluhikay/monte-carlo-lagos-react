import React from "react";
import { commonStyle, redColor } from "../common/commonStyles";
import CLuster1 from "../assets/images/cluster1.webp";
import CLuster2 from "../assets/images/cluster2.webp";
import CLuster3 from "../assets/images/cluster3.webp";

const ClusterImages = () => {
  const clusterImages = [
    { id: 1, priceDetails: "300sqm - N15 000 000 (All inclusive)", img: CLuster1 },
    { id: 2, priceDetails: "500sqm - N25 000 000 ( All inclusive)", img: CLuster2 },
    { id: 3, priceDetails: "1000sqm- N50 000 000 (All inclusive)", img: CLuster3 },
  ];

  return (
    <div className={`${commonStyle} bg-[${redColor}] bg-opacity-30`}>
      <div className="mt-12"></div>
      {clusterImages.map((item, index) => {
        return (
          <div key={index} className={`flex flex-col justify-between ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row f"} w-full mb-12`}>
            <div className={` md:w-1/2 w-full flex justify-center items-center`}>
              <p className={`bg-[${redColor}] md:w-[80%] w-full p-3 md:mb-0 my-5 h-[80%] flex justify-center items-center md:border-[5px] border-[1px] border-white shadow-2xl rounded-lg lg:text-2xl md:text-xl sm:text-base text-xs text-center text-white tracking-wider`}>{item.priceDetails}</p>
            </div>
            <div className={` md:w-1/2 w-full flex md:border-[3px] border-[1px] border-[white] justify-center items-center`}>
              <img src={item.img} alt="" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ClusterImages;
