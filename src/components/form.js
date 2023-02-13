import React from "react";
import Red from "../assets/images/Red.png";
import { redColor, yellowColor } from "../common/commonStyles";
import CustomFormSelect from "../formInputs/CustomFormSelect";
import { titleData, maritalStatusData, meansOfId, getToKnow, plotType, paymentPlans, plotSize, commenceDevelopment, sourceOfFund } from "../formData/formData";
import CustomFormInput from "../formInputs/CustomFormInput";

const Form = () => {
  return (
    <div className={`bg-[url('/src/assets/images/hero.jpeg')] w-screen h-screen bg-no-repeat bg-cover bg-center bg-blend-darken bg-black/70 lg:py-28 md:py-12 pt-12 flex justify-center items-center`}>
      <div className={`bg-[#fafafa] w-[600px] h-full overflow-auto`}>
        <div className="w-full flex flex-col justify-center items-center py-2">
          <img src={Red} alt="" className="w-[100px] h-[100px]" />
          <p className={`text-[${redColor}] mt-3 font-bold md:text-xl text-sm tracking-wider text-center`}>
            Mufasa <span className={`text-[${yellowColor}]`}>Apartments Subscription </span>Form
          </p>
          <p className="font-bold md:text-base text-xs mt-2 text-red-700">
            Instructions: <span className="text-black font-light text-center mb-2">Please read carefully before inputing any information</span>
          </p>
          <ul></ul>
        </div>
        <form action="" className="py-6">
          <div className="px-6 lg:h-[450px] md:h-[500px] overflow-auto">
            <CustomFormSelect selectOptions={titleData} label="Title" id="title" />
            <CustomFormInput type={"file"} label="Full Name" id={"full_name"} />
            <CustomFormInput type={"text"} label="Full Name" id={"full_name"} />
            <CustomFormInput type={"text"} label="Nationality" id={"nationality"} />
            <CustomFormInput type={"text"} label="Country of Residence" id={"country_of_residence"} />
            <CustomFormInput type={"date"} label="Date of Birth" id={"date_of_birth"} />
            <CustomFormSelect selectOptions={maritalStatusData} label="Marital Status" id="marital_status" />
            <CustomFormInput type={"text"} label="Permanent Address" id={"permanent_address"} />
            <CustomFormInput type={"text"} label="City" id={"city"} />
            <CustomFormInput type={"text"} label="State" id={"state"} />
            <CustomFormInput type={"text"} label="Country" id={"country"} />
            <CustomFormInput type={"tel"} label="Telephone No" id={"telephone_no"} />
            <CustomFormInput type={"tel"} label="Mobile No" id={"mobile_no"} />
            <CustomFormInput type={"email"} label="Email Address" id={"email_address"} />
            <CustomFormSelect selectOptions={meansOfId} label="Means of Identification" id="means_of_identification" />
            <p className="font-bold text-red-700 pt-4 pb-2 text-2xl">Next Of Kin Information</p>
            <CustomFormInput type={"text"} label="Next of Kin" id={"next_of_kin"} />
            <CustomFormInput type={"tel"} label="Next of Kin Address" id={"next_of_kin_address"} />
            <CustomFormInput type={"text"} label="NOK City" id={"nok_city"} />
            <CustomFormInput type={"text"} label="NOK State" id={"nok_state"} />
            <CustomFormInput type={"text"} label="NOK Country" id={"nok_country"} />
            <CustomFormInput type={"email"} label="NOK Email Address" id={"nok_email_address"} />
            <CustomFormInput type={"text"} label="Relationship with NOK" id={"relationship_with_nok"} />
            <p className="font-bold text-red-700 pt-4 pb-2 text-2xl">Property Information</p>
            <CustomFormSelect selectOptions={getToKnow} label="How did you get to know about  MONTE CARLO LAGOS" id="get_to_know" />
            <CustomFormSelect selectOptions={plotType} label="Type of Plots" id="get_to_know" />
            <CustomFormSelect selectOptions={paymentPlans} label="Payment" id="payment" />
            <CustomFormInput type={"number"} label="Number of Plots" id={"number_of_plots"} />
            <CustomFormSelect selectOptions={plotSize} label="Plot Size" id="plot_size" />
            <CustomFormSelect selectOptions={commenceDevelopment} label="When do you plan to commence development" id="commence_development" />
            <CustomFormSelect selectOptions={sourceOfFund} label="Source of Fund" id="commence_development" />
          </div>
          <div className="w-full flex justify-center items-center mt-3">
            <button className="bg-red-700 text-white py-2 w-1/2 hover:bg-[#e9a92e] cursor-pointer">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
