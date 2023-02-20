import React from "react";

const CustomFormInput = ({ id, label, type, accept }) => {
  return (
    <div className="my-2">
      <label htmlFor={id}>{label}</label> <br />
      <input type={type} id={id} name={id} className="w-full border capitalize outline-none p-2 rounded-sm mt-1" required accept={accept} />
    </div>
  );
};

export default CustomFormInput;
