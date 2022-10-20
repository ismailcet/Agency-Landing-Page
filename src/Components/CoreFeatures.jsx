import React from "react";
import Pattern2 from "../assets/shape-pattern2.png";
import WorkImg from "../assets/core-feature.png";
const CoreFeatures = () => {
  return (
    <section className="mt-40 px-8 flex">
      <div className="leftCore py-16 w-3/5">
        <p className="core-info uppercase font-semibold text-[14px] text-mainColor mb-2">
          Core Features
        </p>
        <h3 className="core-title text-[2rem] font-bold mb-[2.5rem]">
          <span className="block">Smart Jackpots</span>
          <span className="block"> that you may love this</span>
          <span className="block"> anytime & anywhere</span>
        </h3>
        <p className="core-text text-[1rem] font-normal leading-10 mb-8">
          Get your tests delivered at let home collect sample from the victory
          of the managments that supplies best design system guidelines ever.
        </p>
        <button className="btn text-white">Get Started</button>
      </div>
      <div className="rightCore w-3/5 relative">
        <img
          src={WorkImg}
          alt="Core Image"
          className="xl:coreImg w-max-[620.57px] left-[50px] relative"
        />
        <img src={Pattern2} alt="Pattern" className="patternLeft" />
      </div>
    </section>
  );
};

export default CoreFeatures;
