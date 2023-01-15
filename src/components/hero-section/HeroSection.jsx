import React from "react";
import phone from "../../images/phone.png";
import playstore from "../../images/playstore-bg.png";
import appstore from "../../images/appstore-bg.png";

const HeroSection = () => {
  return (
    <div className="w-11/12 mx-auto pt-[100px]">
      <div className="flex md:flex-row flex-col items-center pb-10">
        <div className="md:w-1/2 w-full">
          <h1 className="md:text-5xl text-2xl font-bold mb-3 font-nunito">
            Your Professional Vaccination Platform
          </h1>
          <p className="mb-10">
            Your best choice to keep up with your child's vaccination and
            <br></br> also have detailed records on your Child's vaccination so
            you <br></br> never miss an opportunity
          </p>

          <p>Want to join the journey now? <span className="font-bold">Download App</span></p>
          <div className="flex gap-4 my-4">
            <button>
              <img src={playstore} alt="" className="h-[48px]" />
            </button>
            <button>
              <img src={appstore} alt="" className="h-[48px]"/>
            </button>
          </div>
        </div>
        <div className="md:w-1/2 w-full">
          <img src={phone} alt="mobile phine" className="h-[500px] mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
