import React from "react";
import performance from "../assets/feature/performance.svg";
import support from "../assets/feature/support.svg";
import partnership from "../assets/feature/partnership.svg";
import subscription from "../assets/feature/subscription.svg";

const AllFeatures = () => {
  return (
    <section className="AllFeatures mt-40">
      <div className="allFeatures-text  text-center ">
        <p className="allFeatures-info uppercase font-bold text-[14px] text-mainColor mb-1">
          Quality features
        </p>
        <h3 className="allFeatures-title text-[2.25rem] font-bold mb-[5.625rem]">
          Amazing useful features
        </h3>
      </div>
      <div className="allFeatures-items grid grid-cols-2 gap-y-20 gap-x-6 align-middle justify-items-center">
        <div className="allFeatures-item flex gap-[2.25rem]">
          <div className="item-img w-2/5">
            <img src={performance} alt="Performance" />
          </div>
          <div className="item-text">
            <h4 className="item-title text-[1.125rem] font-bold  mb-4">
              Fast Performance
            </h4>
            <p className="item-info text-pColor text-[15px] font-normal">
              Let’s just get this out of the way - there will always be a kit
              version of Eduflow. Paid subscriptions allow us to continue
              helping learners around the world.
            </p>
          </div>
        </div>
        <div className="allFeatures-item flex gap-[2.25rem]">
          <div className="item-img w-2/5">
            <img src={partnership} alt="Partnership" />
          </div>
          <div className="item-text">
            <h4 className="item-title text-[1.125rem] font-bold mb-4">
              Partnership deal
            </h4>
            <p className="item-info text-pColor text-[15px] font-normal">
              Let’s just get this out of the way - there will always be a kit
              version of Eduflow. Paid subscriptions allow us to continue
              helping learners around the world.
            </p>
          </div>
        </div>
        <div className="allFeatures-item flex gap-[2.25rem]">
          <div className="item-img w-2/5">
            <img src={subscription} alt="Subscription" />
          </div>
          <div className="item-text">
            <h4 className="item-title text-[1.125rem] font-bold mb-4">
              Pro Subscription
            </h4>
            <p className="item-info text-pColor text-[15px] font-normal">
              Let’s just get this out of the way - there will always be a kit
              version of Eduflow. Paid subscriptions allow us to continue
              helping learners around the world.
            </p>
          </div>
        </div>{" "}
        <div className="allFeatures-item flex gap-[2.25rem]">
          <div className="item-img w-2/5">
            <img src={support} alt="Support" />
          </div>
          <div className="item-text">
            <h4 className="item-title text-[1.125rem] font-bold mb-4">
              Customer Support
            </h4>
            <p className="item-info text-pColor text-[15px] font-normal">
              Let’s just get this out of the way - there will always be a kit
              version of Eduflow. Paid subscriptions allow us to continue
              helping learners around the world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllFeatures;
