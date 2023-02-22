import React from "react";
import First from "../assets/images/first.jpg";
import Second from "../assets/images/second.jpg";
import Third from "../assets/images/three.jpg";
import { commonStyle } from "../common/commonStyles";

const ThreePictures = () => {
  const ImagesArray = [
    { id: 1, img: First },
    { id: 2, img: Second },
    { id: 3, img: Third },
  ];

  return (
    <div className={`${commonStyle}`}>
      <div className="flex justify-between flex-wrap">
        {ImagesArray.map((item) => {
          return (
            <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" key={item.id} className={`md:w-[32%] w-full md:mb-0 mb-12 border-[10px] rounded-lg`}>
              <img src={item.img} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ThreePictures;
