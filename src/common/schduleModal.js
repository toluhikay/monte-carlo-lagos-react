import React from "react";
import Red from "../assets/images/Red.png";
import { useNavigate } from "react-router-dom";
import { useForm } from "@formspree/react";
import ReactDom from "react-dom";
import { redColor, yellowColor } from "./commonStyles";
import { AiFillCloseSquare } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { CloseScheduleModal } from "../features/scheduleSlice";

const SchduleModal = () => {
  const { scheduleModalOpen } = useSelector((store) => store.scheduleModal);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inspectionInputs = [
    { id: 1, type: "text", label: "full name" },
    { id: 1, type: "tel", label: "phone number" },
    { id: 1, type: "email", label: "email address" },
    { id: 1, type: "date", label: "date" },
    { id: 1, type: "time", label: "time" },
  ];
  const [state, handleSubmit] = useForm("xayzqwwn");
  if (state.succeeded) {
    return (
      <p className={`bg-[url('/src/assets/images/hero.jpeg')] w-screen h-screen bg-no-repeat flex-col bg-cover bg-center bg-blend-darken bg-black/70 lg:py-28 md:py-12 pt-12 flex justify-center items-center text-white`}>
        {" "}
        <img src={Red} alt="" className="w-[200px] mb-20 rounded-full bg-white" />
        <p className="py-6 px-6 bg-white text-center mb-20 text-red-600 rounded-3xl">Thank you for scheduling an inspection, we will be expecting you!!!</p>
        <button onClick={() => navigate("/")} className="bg-white text-red-600 rounded-lg text-xl py-2 px-6">
          Continue
        </button>
      </p>
    );
  }

  return ReactDom.createPortal(
    <div className={`fixed transition-all z-[9900]  top-0 bottom-0 ${scheduleModalOpen ? "right-0" : "right-[-100%]"}  w-full h-full flex items-end flex-col justify-center`}>
      <div className="fixed w-full h-full z-[10000]  bg-black/30" onClick={() => dispatch(CloseScheduleModal())}></div>
      <div className="md:w-[500px] w-full min-h-full bg-[#fbfbfb] overflow-auto md:pt-0 px-6 z-[20000] flex flex-col  text-center">
        <div className="flex justify-end items-end py-9">
          <AiFillCloseSquare className={`z-[30000] text-3xl text-[${redColor}]`} onClick={() => dispatch(CloseScheduleModal())} />
        </div>
        <p className={`text-[${yellowColor}] italic font-extralight md:text-2xl text-base`}>
          We are very pleased <span className={`text-[${redColor}]`}>to have you here and we will show you</span> around with utmost delight
        </p>
        <form onSubmit={handleSubmit}>
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
          <button className={`bg-[${redColor}] text-white py-2 hover:bg-[#e9a92e] px-4 w-full mt-1`} type="submit" disabled={state.submitting}>
            Submit
          </button>
        </form>
        <p className="font-semibold">You can call us directly to Schedule an Inspection as well via +2349155170650</p>
      </div>
    </div>,
    document.getElementById("portals")
  );
};

export default SchduleModal;
