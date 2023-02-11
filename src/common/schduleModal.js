import React from "react";
import ReactDom from "react-dom";
import { redColor, yellowColor } from "./commonStyles";
import { AiFillCloseSquare } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { CloseScheduleModal } from "../features/scheduleSlice";

const SchduleModal = () => {
  const { scheduleModalOpen } = useSelector((store) => store.scheduleModal);
  const dispatch = useDispatch();
  const inspectionInputs = [
    { id: 1, type: "text", label: "full name" },
    { id: 1, type: "tel", label: "phone number" },
    { id: 1, type: "email", label: "email address" },
    { id: 1, type: "date", label: "date" },
    { id: 1, type: "time", label: "time" },
  ];

  return ReactDom.createPortal(
    <div className={`fixed transition-all  top-0 ${scheduleModalOpen ? "right-0" : "right-[-100%]"}  w-full h-full flex items-end flex-col justify-center`}>
      <AiFillCloseSquare className={`absolute top-6 right-6 z-[30000] text-3xl text-[${redColor}]`} onClick={() => dispatch(CloseScheduleModal())} />
      <div className="absolute w-full h-full z-[10000] bg-black/30" onClick={() => dispatch(CloseScheduleModal())}></div>
      <div className="md:w-[500px] overflow-auto w-full h-full bg-[#fbfbfb] p-6 z-[20000] flex flex-col justify-around text-center">
        <p className={`text-[${yellowColor}] italic font-extralight text-2xl`}>
          We are very pleased <span className={`text-[${redColor}]`}>to have you here and we will show you</span> around with utmost delight
        </p>
        <form action="">
          <p className="">Schedule Inspection</p>
          <div>
            {inspectionInputs.map((item, index) => {
              return (
                <div key={index} className="w-full items-start text-start my-6">
                  <label htmlFor="" className="capitalize">
                    {item.label}
                  </label>{" "}
                  <br />
                  <input type={item.type} className="border w-full p-2 mt-1 bg-white outline-none" required />
                </div>
              );
            })}
          </div>
          <label htmlFor="">Submit Your Response</label> <br />
          <button className={`bg-[${redColor}] text-white py-2 hover:bg-[#e9a92e] px-4 w-full mt-1`}>Submit</button>
        </form>
        <p className="font-semibold">You can call us directly to Schedule an Inspection as well via +2349155170650</p>
      </div>
    </div>,
    document.getElementById("portals")
  );
};

export default SchduleModal;
