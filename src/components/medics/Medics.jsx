import React from "react";
import doc1 from "../../images/doc-1.jpg";
import doc2 from "../../images/doc-2.jpg";
const Medics = () => {
  return (
    <div className="w-11/12 mx-auto md:pt-[100px] md:pb-[150px] py-14">
        <h3 className="font-bold md:text-5xl text-3xl mb-9">Our Medical Specialists</h3>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 md:gap-8 gap-3">
        <div>
          <div className="image-box mb-3 overflow-hidden">
            <img src={doc1} alt="doctor" className="md:h-[300px] h-[200px] w-full object-cover hover:scale-110 transition-all duration-100 ease-in-out delay-150" />
          </div>
          <div className="medic-info text-center">
            <h5 className="font-semibold text-xl">John Thomas</h5>
            <p className="text-base">Gynaecologist</p>
          </div>
        </div>
        <div>
          <div className="image-box mb-3 overflow-hidden">
            <img src={doc2} alt="doctor" className="md:h-[300px] h-[200px] w-full object-cover hover:scale-110 transition-all duration-100 ease-in-out delay-150"/>
          </div>
          <div className="medic-info text-center">
            <h5 className="font-semibold text-xl">John Thomas</h5>
            <p className="text-base">Gynaecologist</p>
          </div>
        </div>
        <div>
          <div className="image-box mb-3 overflow-hidden">
            <img src={doc1} alt="doctor" className="md:h-[300px] h-[200px] w-full object-cover hover:scale-110 transition-all duration-100 ease-in-out delay-150"/>
          </div>
          <div className="medic-info text-center">
            <h5 className="font-semibold text-xl">John Thomas</h5>
            <p className="text-base">Gynaecologist</p>
          </div>
        </div>
        <div>
          <div className="image-box mb-3 overflow-hidden">
            <img src={doc1} alt="doctor" className="md:h-[300px] h-[200px] w-full object-cover hover:scale-110 transition-all duration-100 ease-in-out delay-150"/>
          </div>
          <div className="medic-info text-center">
            <h5 className="font-semibold text-xl">John Thomas</h5>
            <p className="text-base">Gynaecologist</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Medics;
