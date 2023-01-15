import React from "react";
import phone from "../../images/phone.png";
import playstore from "../../images/playstore-bg.png";
import appstore from "../../images/appstore-bg.png";
const Download = () => {
  return (
    <div className="w-11/12 mx-auto py-6">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 w-full">
          <h3 className="text-4xl font-semibold text-[#0b12ba] ">What are you waiting<br></br> for? Download App Now</h3>
        <div className="flex gap-4 my-10">
        <button className="h-[48px]">
            <img src={playstore} alt="" className="h-[48px]"/>
          </button>
          <button>
            <img src={appstore} alt="" className="h-[48px]"/>
          </button>
        </div>
        </div>
        <div className="md:w-1/2 w-full flex justify-center">
         <div className="flex">
         <img src={phone} alt="mobile phone" className="h-[500px] md:mt-[-200px]" />
          <img src={phone} alt="mobile phne" className="h-[500px] md:mt-[-200px] hidden md:block" />
         </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
