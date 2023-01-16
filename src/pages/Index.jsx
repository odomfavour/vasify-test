import React from "react";
import Download from "../components/download/Download";
import Features from "../components/features/Features";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/hero-section/HeroSection";
import Medics from "../components/medics/Medics";
import Preparation from "../components/preps/Preparation";
import Reasons from "../components/reasons/Reasons";
import Testimonials from "../components/testimonials/Testimonials";

const Index = () => {
  return (
    <section className="font-nunito overflow-hidden">
      <div className="hero-section bg-[#f5f5fd]  font-nunito">
        <Header />
        <HeroSection />
      </div>
      <div className="md:min-h-screen md:py-16">
        <Features />
      </div>
      <div className="md:min-h-screen md:py-16">
        <Preparation />
      </div>
      <div className="py-16 bg-[#f5f5fd]">
        <Reasons />
      </div>
      <div className="">
        <Medics />
        <Testimonials />
      </div>
      <div className="bg-[#addde9]">
        <Download />
      </div>
      <div className="bg-[#0119b7] text-white">
        <Footer />
      </div>
    </section>
  );
};

export default Index;
