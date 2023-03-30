import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[url('/src/assets/images/hero.webp')] bg-no-repeat bg-cover bg-center min-h-[700px] text-center text-white bg-blend-color-burn bg-[#00000090] w-full flex flex-col justify-center items-center">
      <p className="md:text-[60px] text-[30px] text-red-400">OOPS!!!!!!</p>
      <p className="sm:text-[100px] text-[50px] text-white font-bold">404 Error</p>
      <p className="md:text-[60px] text-[30px] text-red-400">Page Not Found!</p>
      <button className="bg-red-500 mt-[30px] border-white border px-[50px] py-2 rounded-[5px] outline-none" onClick={() => navigate("/")}>
        HOME PAGE
      </button>
    </div>
  );
};

export default NotFound;
