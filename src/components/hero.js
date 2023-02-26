import React from "react";
import { commonStyle } from "../common/commonStyles";
import SchduleModal from "../common/schduleModal";
import { OpenScheduleModal } from "../features/scheduleSlice";
import { useDispatch } from "react-redux";

const Hero = () => {
  const dispatch = useDispatch();
  return (
    <section className={`bg-[url('/src/assets/images/hero.webp')] text-white flex md:flex-row flex-col md:justify-between justify-center items-center md:text-start text-center h-[60vh] bg-center bg-cover bg-blend-color ${commonStyle} bg-[#00000090] bg-no-repeat w-full`}>
      <div className="md:mb-0 mb-6">
        <p className="font-bold lg:text-5xl md:text-4xl text-3xl mb-4">
          <span className="text-[#c31516]">A</span> Cosmopolitan <span className="text-[#c31516]">Metropolis</span>
        </p>
        <p className="text-[#e9a92e] text-lg">Epe Town, Lagos.</p>
      </div>
      <div>
        <button className="bg-[#c31516] py-2 px-8" onClick={() => dispatch(OpenScheduleModal())}>
          Schedule Visit
        </button>
      </div>
      <SchduleModal />
    </section>
  );
};

export default Hero;
