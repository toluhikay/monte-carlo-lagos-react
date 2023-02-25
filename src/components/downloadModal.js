import React from "react";
import ReactDom from "react-dom";
import { useSelector } from "react-redux";
import { redColor, yellowColor } from "../common/commonStyles";
import { useDispatch } from "react-redux";
import { SetModalClose } from "../features/downloadBrochureSlice";

const DownloadBrochureModal = () => {
  const { isOpen } = useSelector((store) => store.downloadBrochure);
  const dispatch = useDispatch();

  const formInput = [
    { label: "your name", inputType: "text" },
    { label: "your email", inputType: "email" },
    { label: "your phone number", inputType: "tel" },
  ];

  return ReactDom.createPortal(
    <div className={`fixed top-0 left-0 transition-all flex-col w-full h-full ${isOpen ? "z-[2000000] opacity-1" : "z-[-200000] opacity-0"} flex items-center justify-center`}>
      <div className="absolute w-full h-full z-[10000]  bg-black/30" onClick={() => dispatch(SetModalClose())}></div>
      <div className={`bg-[#222] text-[${yellowColor}] w-[500px] z-[100000] max-w-[90vw] py-12 flex rounded-[5px] flex-col items-center justify-center min-h-[300px]`}>
        <p className="mb-12 text-2xl font-bold">Download Our Brochure</p>
        <form action="" className="z-[10000] w-full px-[20px] flex flex-col items-center">
          {formInput.map((item, index) => {
            return (
              <div key={index} className="w-full mb-6">
                <label htmlFor={item.inputType} className="capitalize">
                  {item.label}
                </label>{" "}
                <br />
                <input type={item.inputType} className="w-full border outline-none p-2 rounded-[5px] mt-[10px]" required />
              </div>
            );
          })}
          <button className={`bg-[${redColor}] text-white px-3 py-1 rounded-[5px]`} type="submit">
            Download Brochure
          </button>
        </form>
      </div>
    </div>,
    document.getElementById("portals")
  );
};

export default DownloadBrochureModal;
