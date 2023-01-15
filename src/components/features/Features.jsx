import React from "react";
import phone from "../../images/phone.png";

const Features = () => {
  return (
    <div className="w-11/12 mx-auto font-nunito">
      <h3 className="md:text-5xl text-3xl font-bold">All the Features You Need<br></br> in One Place</h3>
      <div className="md:w-2/3 w-full mx-auto md:pt-20 pt-10">
        <div className="flex md:flex-row flex-col gap-4">
          <div className="md:w-1/3 w-full">
            <div className="flex flex-col justify-between h-full">
              <div className="feat md:mt-14 mb-10">
                <div className="feat-title font-bold text-xl">Vaccination & Medication Tracking</div>
                <p>Track and monitor your vaccination and medication anywhere</p>
              </div>
              <div className="feat mb-24">
                <div className="feat-title font-bold text-xl">Incorporated Records in Government Hospitals</div>
                <p>Track and monitor your vaccines and medication anywhere</p>
              </div>
            </div>
          </div>
          <div className="w mx-auto">
            <img src={phone} alt="mobile phine" className="h-[500px] animate-bounce-slow delay-1000" />
          </div>
          <div className="md:w-1/3 w-full">
            <div className="flex flex-col justify-between h-full">
              <div className="feat md:my-14 mb-10">
                <div className="feat-title font-bold text-xl">Chat with a qualified <br></br>Doctor</div>
                <p className="text-[#5f5959] text-base">Track and monitor your vaccines and medication anywhere</p>
              </div>
              <div className="feat mb-24">
                <div className="feat-title font-bold text-xl">Detailed hospital Database with their Descriptions</div>
                <p className="text-[#5f5959] text-base">Track and monitor your vaccines and medication anywhere</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
