import React from "react";
import HeaderImg from "../assets/banner-thumb.png";
import leftImg from "../assets/shape-left.png";
import rightImg from "../assets/shape-right.png";
const HeaderContent = () => {
  return (
    <section className="contentSection pt-24 text-center  relative">
      <h1 className="content-title text-[4rem] font-bold">
        Top Quality Digital <span> Products To Explore</span>
      </h1>
      <p className="content-info mt-[1.875rem] text-lg">
        <span> Get your blood tests delivered at let home collect sample</span>{" "}
        <span>from the victory of the managments that supplies </span>
        <span>best design system guidelines ever.</span>
      </p>
      <button className="btn text-white mt-[1.875rem]">explore</button>
      <img
        src={leftImg}
        alt=""
        className="lg:w-2/4 absolute lg:left-[-24%] xl:left-[-30%] 2xl:left-[-24%] lg:top-30 xl:top-80 2xl:top-10 z-[-1]"
      />
      <img
        src={rightImg}
        alt=""
        className="lg:w-2/4 absolute lg:right-[-24%] xl:right-[-30%] 2xl:right-[-24%] lg:top-middle xl:top-middle-xl 2xl:top-middle z-[-1]"
      />
      <div className="content-img flex align-middle justify-center mt-8">
        <img src={HeaderImg} alt="Banner Content" />
      </div>
    </section>
  );
};

export default HeaderContent;
