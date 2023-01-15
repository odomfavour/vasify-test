import React from "react";
import pointer from '../../images/pointer-bb.png'
const Preparation = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="flex md:flex-row flex-col-reverse">
        <div className="image-section md:w-1/2 w-full">
            <img src={pointer} alt="woman pointing" className="mx-auto" />
        </div>
        <div className="prep-section md:w-1/2 w-full" data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out-cubic">
          <h3 className="md:text-5xl text-3xl font-bold mb-3">Preparation before <br></br>Vaccination</h3>
          <p className="mb-5">
            The success of the vaccine is strongly influenced by the strength of
            the immune system. Some of the things to do for efficient
            performance of the vaccine are:
          </p>
          <ul>
            <li className="mb-5">
              <h5 className="prep-heading font-semibold text-lg">01. Avoid stress</h5>
              <p className="text-[#5f5959] text-base">
                Avoid too much stress and playful acts so the body can be in the
                right state
              </p>
            </li>
            <li className="mb-5">
              <h5 className="prep-heading font-semibold text-lg">02. Eat Healthy Foods</h5>
              <p className="text-[#5f5959] text-base">
                Eating Healthy is sometimes just what we need to fight these diseases
              </p>
            </li>
            <li className="mb-5">
              <h5 className="prep-heading font-semibold text-lg">03. Get enough Sleep</h5>
              <p className="text-[#5f5959] text-base">
                As we all know enough sleep is always good for the body. Not too much, not too little
              </p>
            </li>
            <li className="mb-5">
              <h5 className="prep-heading font-semibold text-lg">04. Excercise</h5>
              <p className="text-[#5f5959] text-base">
                Before you come for Vaccination, always find one or two ways to excercise
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Preparation;
