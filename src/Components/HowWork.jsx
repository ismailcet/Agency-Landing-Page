import React from "react";

const HowWork = () => {
  return (
    <section className="howWork mt-40 py-[4rem] xl:mx-[-16rem] lg:mx-[-8rem] h-[70vh] bg-mainColor bg-workPattern bg-no-repeat bg-center bg-cover flex gap-8 flex-col items-center">
      <div className="work-up text-center ">
        <h4 className="work-info text-white text-[0.875rem] font-bold uppercase mb-2">
          Whats the function
        </h4>
        <h3 className="work-title text-white text-[2rem]">
          Let’s see how it works
        </h3>
      </div>
      <div className="work-down grid grid-cols-4 gap-[60px] xl:px-[8rem] lg:px-[4rem]">
        <div className="work-item">
          <button className="number w-[70px] h-[70px] rounded-[1.875rem] mb-[1.875rem] text-[1.875rem] font-bold bg-white text-mainColor">
            01
          </button>
          <h3 className="work-item-title text-[22px] text-white font-medium mb-[15px]">
            Set disbursement Instructions
          </h3>
          <p className="work-item-info text-[15px] font-normal text-white">
            Get your blood tests delivered at home collect a sample from the
            your blood tests.
          </p>
        </div>
        <div className="work-item">
          <button className="number w-[70px] h-[70px] rounded-[1.875rem] mb-[1.875rem] text-[1.875rem] font-bold bg-white text-mainColor">
            02
          </button>
          <h3 className="work-item-title text-[22px] text-white font-medium mb-[15px]">
            Assembly retrieves funds from your account
          </h3>
          <p className="work-item-info text-[15px] font-normal text-white">
            Get your blood tests delivered at home collect a sample from the
            your blood tests.
          </p>
        </div>
        <div className="work-item">
          <button className="number w-[70px] h-[70px] rounded-[1.875rem] mb-[1.875rem] text-[1.875rem] font-bold bg-white text-mainColor">
            03
          </button>
          <h3 className="work-item-title text-[22px] text-white font-medium mb-[15px]">
            Assembly initiates disbursement
          </h3>
          <p className="work-item-info text-[15px] font-normal text-white">
            Get your blood tests delivered at home collect a sample from the
            your blood tests.
          </p>
        </div>
        <div className="work-item">
          <button className="number w-[70px] h-[70px] rounded-[1.875rem] mb-[1.875rem] text-[1.875rem] font-bold bg-white text-mainColor">
            04
          </button>
          <h3 className="work-item-title text-[22px] text-white font-medium mb-[15px]">
            Customer receives funds payment
          </h3>
          <p className="work-item-info text-[15px] font-normal text-white">
            Get your blood tests delivered at home collect a sample from the
            your blood tests.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowWork;
