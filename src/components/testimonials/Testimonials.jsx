import React, { useState } from "react";
import mother1 from "../../images/mother-1.jpg";
import {
  BsStarFill,
  BsStar,
  BsChevronRight,
  BsChevronLeft,
} from "react-icons/bs";
const Testimonials = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  return (
    <div className="w-11/12 mx-auto pb-12">
      <h3 className="font-bold md:text-5xl text-3xl mb-9">
        What Mothers Are Saying
      </h3>
      <div className="flex justify-between items-center md:mb-[200px] gap-3">
        <button
          className="lg:h-[80px] lg:w-[80px] rounded-full h-10 w-10 bg-[#a7dbe9] text-white flex justify-center items-center hover:bg-[#001bb4] transition ease-in-out delay-150"
          role="button"
          disabled={slideIndex === 0}
          onClick={() => setSlideIndex(slideIndex - 1)}
        >
          <BsChevronLeft className="font-extrabold md:text-4xl text-2xl" />
        </button>
        <div className="w-2/3 bg-[#f5f5fd] py-5 md:px-8 px-4">
          {slideIndex === 0 ? (
            <div>
              <div className="flex gap-2 mb-3">
                <BsStarFill className="text-[#ffb135]" />
                <BsStarFill className="text-[#ffb135]" />
                <BsStarFill className="text-[#ffb135]" />
                <BsStarFill className="text-[#ffb135]" />
                <BsStar className="text-[#ffb135]" />
              </div>
              <p>
              Ever since i started using vasify, it has been a good experience and since I have been able to keep my son's vaccination dates. What a wonderful experience.
              </p>
              <div className="flex items-center gap-3 mt-4">
                <div className="mother-image">
                  <img
                    src={mother1}
                    alt="mother staring"
                    className="md:h-[80px] md:w-[80px] h-10 w-10 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h5 className="text-blue-500 md:text-lg text-sm mb-0">
                    Sandra Bullock
                  </h5>
                  <p className="text-sm">Mother</p>
                </div>
              </div>
            </div>
          ) : slideIndex === 0 ? (
            <div>
              <div className="flex gap-2 mb-3">
                <BsStarFill className="text-[#ffb135]" />
                <BsStarFill className="text-[#ffb135]" />
                <BsStarFill className="text-[#ffb135]" />
                <BsStarFill className="text-[#ffb135]" />
                <BsStar className="text-[#ffb135]" />
              </div>
              <p className="text-base">
                Ever since i started using vasify, it has been a good experience and since I have been able to keep my son's vaccination dates.
              </p>
              <div className="flex items-center gap-3 mt-4">
                <div className="mother-image">
                  <img
                    src={mother1}
                    alt="mother staring"
                    className="md:h-[80px] md:w-[80px] h-16 w-16 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h5 className="text-blue-500 md:text-lg text-base mb-0">
                    Olive Sam
                  </h5>
                  <p className="text-sm">Mother</p>
                </div>
              </div>
            </div>
          ) : slideIndex === 2 ? (
            <div>
              <div className="flex gap-2 mb-3">
                <BsStarFill className="text-[#ffb135]" />
                <BsStarFill className="text-[#ffb135]" />
                <BsStarFill className="text-[#ffb135]" />
                <BsStarFill className="text-[#ffb135]" />
                <BsStar className="text-[#ffb135]" />
              </div>
              <p>
               Vasify is great. I can't think of better. Ever since i started using vasify, it has been a good experience and since I have been able to keep my son's vaccination dates.
              </p>
              <div className="flex items-center gap-3 mt-4">
                <div className="mother-image">
                  <img
                    src={mother1}
                    alt="mother staring"
                    className="md:h-[80px] md:w-[80px] h-16 w-16 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h5 className="text-blue-500 md:text-lg text-base mb-0">
                    Sandra Bakins
                  </h5>
                  <p className="text-sm">Mother</p>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex gap-2 mb-3">
                <BsStarFill className="text-[#ffb135]" />
                <BsStarFill className="text-[#ffb135]" />
                <BsStarFill className="text-[#ffb135]" />
                <BsStarFill className="text-[#ffb135]" />
                <BsStar className="text-[#ffb135]" />
              </div>
              <p className="text-base">
              Ever since i started using vasify, it has been a good experience and since I have been able to keep my son's vaccination dates.
              </p>
              <div className="flex items-center gap-3 mt-4">
                <div className="mother-image">
                  <img
                    src={mother1}
                    alt="mother staring"
                    className="md:h-[80px] md:w-[80px] h-16 w-16 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h5 className="text-blue-500 md:text-lg text-base mb-0">
                    Camie Bullock
                  </h5>
                  <p className="text-sm">Mother</p>
                </div>
              </div>
            </div>
          )}
        </div>
        <button
          className="lg:h-[80px] lg:w-[80px] h-10 w-10 rounded-full bg-[#001bb4] text-white flex justify-center items-center"
          role="button"
          disabled={slideIndex === 4}
          onClick={() => setSlideIndex(slideIndex + 1)}
        >
          <BsChevronRight className="font-extrabold md:text-4xl text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
