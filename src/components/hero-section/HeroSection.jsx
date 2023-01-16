import React from "react";
import phone from "../../images/phone-1.png";
import playstore from "../../images/playstore-bg.png";
import appstore from "../../images/appstore-bg.png";
const HeroSection = () => {
  return (
    <div className="w-11/12 mx-auto pt-[70px]">
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

          <p>
            Want to join the journey now?{" "}
            <span className="font-bold">Download App</span>
          </p>
          <div className="flex gap-4 my-4">
            <button>
              <img src={playstore} alt="" className="h-[48px]" />
            </button>
            <button>
              <img src={appstore} alt="" className="h-[48px]" />
            </button>
          </div>
        </div>
        <div className="md:w-1/2 w-full relative">
          <img
            src={phone}
            alt="mobile phine"
            className="h-[500px] mx-auto pt-8"
            data-aos="fade-down"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out-cubic"
          />
          <div className="h-5 w-5 rounded-full bg-[#0119b7] top-1 right-24 absolute"></div>
          <div className="h-5 w-5 rounded-full bg-[#0119b7]  top-24 right-0 absolute"></div>
          <div className="md:h-10 md:w-10 h-7 w-7 rounded-full bg-[#0119b7] top-60 right-10 absolute hidden md:block"></div>
          <div className="md:h-10 md:w-10 h-7 w-7 rounded-full bg-[#0119b7] top-60 left-0 absolute md:hidden block"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
