import React from "react";
import First from "../assets/images/first.webp";
import Second from "../assets/images/second.webp";
import Third from "../assets/images/three.webp";
import { commonStyle } from "../common/commonStyles";
import { useDispatch } from "react-redux";
import { SetModalOpen } from "../features/pictureModalSlice";

const ThreePictures = () => {
  const ImagesArray = [
    { id: 1, img: First },
    { id: 2, img: Second },
    { id: 3, img: Third },
  ];
  const dispatch = useDispatch();
  return (
    <div className={`${commonStyle}`}>
      <div className="flex justify-between flex-wrap">
        {ImagesArray.map((item) => {
          return (
            <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" key={item.id} className={`md:w-[32%] w-full md:mb-0 mb-12 md:border-[10px] border-[4px] rounded-lg`}>
              <img src={item.img} alt="" onClick={() => dispatch(SetModalOpen(item.img))} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ThreePictures;
