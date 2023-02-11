import React from "react";

const CustomFormSelect = ({ label, selectOptions, id }) => {
  return (
    <div className="my-1">
      <label htmlFor={id}>{label}</label> <br />
      <select name="" id={id} className="w-full border capitalize outline-none p-2 rounded-sm mt-1" required>
        {selectOptions.map((item, index) => {
          return (
            <option value={item.option === "select" ? "" : item.option} className="capitalize" key={index}>
              {item.option}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default CustomFormSelect;
