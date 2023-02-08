import React from "react";
import { commonStyle, redColor, yellowColor } from "../common/commonStyles";

const Map = () => {
  return (
    <div className={`${commonStyle}`}>
      <div className="flex md:flex-row flex-col items-center py-12">
        <div className="md:w-1/2 w-full flex md:text-start text-center flex-col justify-between h-full">
          <p className={`text-[${redColor}] md:text-3xl text-2xl mb-6`}>
            Monte <span className={`text-[${yellowColor}] `}>Carlo Lagos</span>
          </p>
          <p className="tracking-wider mb-6">This amazing estate comprises of 300sqm, 500sqm, 1000sqm and lake view plots overlooking the lagoon, with a boat ramp for navigating water recreational activities and transportation.</p>
          <p className="mb-6">Initial Deposit</p>
          <p className={`text-[${redColor}] md:text-2xl text-xl font-bold mb-6`}>₦4,000,000</p>
          <p className={`tracking-widest md:text-2xl text-xl mb-6`}>Promo Ends 31st January 2023</p>
        </div>
        <div className={`md:w-1/2 w-full flex border-[10px] border-[#c3151690] rounded-lg justify-center items-center`}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.657168724022!2d3.486721514941358!3d6.438057125936457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bff7b601f46df%3A0x7b9ca29fb13ec179!2sAdozillion%20Homes%20and%20Realty!5e0!3m2!1sen!2sng!4v1675800694181!5m2!1sen!2sng"
            className={`w-full `}
            height="350"
            title="Monte Carlo Lagos Map"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Map;
