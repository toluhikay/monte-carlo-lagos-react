import React from "react";
import ReactDom from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { SetModalClose } from "../features/pictureModalSlice";
import { AiOutlineClose } from "react-icons/ai";

const PictureModal = () => {
  const { isOpen, src } = useSelector((store) => store.pictureModal);
  const dispatch = useDispatch();

  return ReactDom.createPortal(
    <div className={`fixed top-0 left-0 transition-all flex-col w-full h-full ${isOpen ? "z-[200000] opacity-1" : "z-[-200000] opacity-0"} flex items-center justify-center`}>
      <div className="bg-black/80 absolute top-0 bottom-0 left-0 right-0 z-[1000]" onClick={() => dispatch(SetModalClose())}></div>
      <div onClick={() => dispatch(SetModalClose())}>
        <AiOutlineClose className="absolute z-[20000] bg-red-600 text-white text-3xl  md:top-[30px] md:right-[30px] top-[10px] right-[15px]" />{" "}
      </div>
      <div className="w-[700px] max-w-[90vw] z-[20000] h-auto">
        <img src={src} alt="" />
      </div>
    </div>,
    document.getElementById("portals")
  );
};

export default PictureModal;
