import React from "react";
import mother1 from '../../images/mother-1.jpg'
import {BsStarFill, BsStar, BsChevronRight, BsChevronLeft} from 'react-icons/bs'
const Testimonials = () => {
  return (
    <div className="w-11/12 mx-auto pb-12">
        <h3 className="font-bold md:text-5xl text-3xl mb-9">What Mothers Are Saying</h3>
      <div className="flex justify-between items-center md:mb-[200px]">
        <div className="lg:h-[80px] lg:w-[80px] rounded-full h-12 w-12 bg-[#a7dbe9] text-white flex justify-center items-center hover:bg-[#001bb4] transition ease-in-out delay-150" role="button">
            <BsChevronLeft className="font-extrabold text-4xl"/>
        </div>
        <div className="w-2/3 bg-[#f5f5fd] py-5 px-8">
          <div className="flex gap-2 mb-3">
            <BsStarFill className="text-[#ffb135]"/>
            <BsStarFill className="text-[#ffb135]"/>
            <BsStarFill className="text-[#ffb135]"/>
            <BsStarFill className="text-[#ffb135]"/>
            <BsStar className="text-[#ffb135]"/>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse atque
            nam, voluptate praesentium veniam eos quaerat inventore! Voluptate
            adipisci sapiente ipsum omnis, eaque, expedita sint eum veritatis
            itaque quisquam debitis!
          </p>
          <div className="flex items-center gap-3 mt-4">
            <div className="mother-image">
              <img src={mother1} alt="mother staring" className="md:h-[80px] md:w-[80px] h-16 w-16 rounded-full object-cover" />
            </div>
            <div>
              <h5 className="text-blue-500 md:text-lg text-base mb-0">Sandra Bullock</h5>
              <p className="text-sm">Mother</p>
            </div>
          </div>
        </div>
        <div className="lg:h-[80px] lg:w-[80px] h-12 w-12 rounded-full bg-[#001bb4] text-white flex justify-center items-center" role="button">
            <BsChevronRight className="font-extrabold text-4xl"/>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
