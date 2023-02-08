import React from "react";
import { commonStyle, redColor, yellowColor } from "../common/commonStyles";
import { FEATURESARRAY } from "../constants/constant";

const MonteCarloLagos = () => {
  return (
    <div className={`${commonStyle} text-center`}>
      <p className="md:text-5xl mb-12 mt-12 text-3xl font-bold ">Monte Carlo Lagos</p>
      <p>
        If you desire serenity, luxury, nature and lifestyle. Owning a waterfront property brings you the maximum satisfaction to your desires.
        <br /> <br />
        Imagine having a serene environment sandwiched in natures beautiful and rich formations with exciting world experiences in one estate, every single day will be a roller coaster journey for you and your loved ones.
        <br /> <br />
        Monte Carlo Lagos is a city of Glitz and Glamour where every single moment is soothing to the soul and body. The estate gives owners and visitors a beautiful coastal retreat and causes everyday look like holiday in the moon! <br /> <br />
      </p>

      <div>
        <p className={`text-[${redColor}] font-bold text-2xl my-6`}>Features</p>
        <div className="flex flex-wrap justify-between">
          {FEATURESARRAY.map((item, index) => {
            return (
              <div key={item.id} className={`flex flex-col items-center md:w-[23%] w-[48%] my-12`}>
                <p className={`text-5xl text-[${yellowColor}] `}>{item.icon}</p>
                <p className={`text-[${redColor}] mt-3`}>{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MonteCarloLagos;
