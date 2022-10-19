import React from "react";
import Service from "../assets/service-thumb.png";
import Pattern from "../assets/shape-pattern1.png";
import partnership from "../assets/feature/partnership.svg";
import subscription from "../assets/feature/subscription.svg";

const OurServices = () => {
  return (
    <section className="ourServices mt-40 px-8 flex gap-10">
      <div className="left-services relative w-3/5">
        <img src={Service} alt="Service" />
        <img
          src={Pattern}
          alt="Pattern"
          className="services-patterns absolute"
        />
      </div>
      <div className="right-services w-2/5">
        <p className="services-info uppercase font-bold text-[14px] text-mainColor mb-1">
          our services
        </p>
        <h3 className="services-title text-[2.1rem] font-semibold leading-10">
          <span>Business Goals</span>
          <span> Achieved with Design</span>
        </h3>
        <div className="services-items mt-7">
          <div className="services-item flex gap-4">
            <div className="item-img ">
              <img src={partnership} alt="Partnership" />
            </div>
            <div className="item-text">
              <h3 className="item-title  text-[1.125rem] font-bold  mb-1">
                Smart Features
              </h3>
              <p className="item-info text-[.875rem]">
                Get your blood tests delivered at let home collect sample from
                the victory of the managments.Your blood tests.
              </p>
            </div>
          </div>
          <div className="services-item flex gap-4">
            <div className="item-img ">
              <img src={subscription} alt="Subscription" />
            </div>
            <div className="item-text">
              <h3 className="item-title  text-[1.125rem] font-bold  mb-1">
                Secure Contents
              </h3>
              <p className="item-info text-[.875rem]">
                {" "}
                Get your blood tests delivered at let home collect sample from
                the victory of the managments.Your blood tests.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
