import React from "react";
import performance from "../assets/feature/performance.svg";
import support from "../assets/feature/support.svg";
import partnership from "../assets/feature/partnership.svg";
import subscription from "../assets/feature/subscription.svg";

const Features = () => {
  return (
    <section className="features pt-40 flex flex-col justify-center items-center">
      <div className="features-text  text-center ">
        <p className="features-info uppercase font-bold text-[14px] text-mainColor mb-1">
          Whats the function
        </p>
        <h3 className="features-title text-[2.25rem] font-bold mb-[5.625rem]">
          Meet the feature of product
        </h3>
      </div>
      <div className="features-items grid grid-cols-4 gap-4 items-center justify-items-center">
        <div className="features-item">
          <div className="item-img">
            <img src={performance} alt="Performance" />
          </div>
          <h4 className="item-title text-[1.125rem] font-bold  mb-4">
            Fast Performance
          </h4>
          <p className="item-info text-pColor text-[15px] font-normal">
            Get your blood tests delivered at home collect a sample from the
            your blood tests.
          </p>
        </div>
        <div className="features-item">
          <div className="item-img">
            <img src={partnership} alt="Partnership" />
          </div>
          <h4 className="item-title text-[1.125rem] font-bold mb-4">
            Partnership deal
          </h4>
          <p className="item-info text-pColor text-[15px] font-normal">
            Get your blood tests delivered at home collect a sample from the
            your blood tests.
          </p>
        </div>
        <div className="features-item">
          <div className="item-img">
            <img src={subscription} alt="Subscription" />
          </div>
          <h4 className="item-title text-[1.125rem] font-bold mb-4">
            Pro Subscription
          </h4>
          <p className="item-info text-pColor text-[15px] font-normal">
            Get your blood tests delivered at home collect a sample from the
            your blood tests.
          </p>
        </div>{" "}
        <div className="features-item">
          <div className="item-img">
            <img src={support} alt="Support" />
          </div>
          <h4 className="item-title text-[1.125rem] font-bold mb-4">
            Customer Support
          </h4>
          <p className="item-info text-pColor text-[15px] font-normal">
            Get your blood tests delivered at home collect a sample from the
            your blood tests.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
