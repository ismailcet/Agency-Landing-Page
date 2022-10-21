import React, { useState, useEffect } from "react";
import { TiTickOutline } from "react-icons/ti";
const Pricing = () => {
  const [active, setActive] = useState("month");

  const changeActive = (e) => {
    e.preventDefault();
    setActive(e.target.value);
  };

  useEffect(() => {
    console.log(active);
  }, [active]);

  return (
    <section className="pricing mt-40 flex flex-col items-center ">
      <div className="pricing-titles text-center">
        <p className="pricing-info uppercase font-semibold text-[14px] text-mainColor mb-2">
          Pricing Plan
        </p>
        <h3 className="pricing-title text-[2rem] font-bold mb-[2.25rem]">
          Choose your pricing policy
        </h3>
      </div>
      <div className="button-section flex p-2 mx-auto my-0 rounded-md bg-[#F7F8FB]">
        <button
          className={`btn-pricing monthly py-[15px] px-[20px] rounded-md text-[15px] font-medium bg-transparent transition duration-300 ${
            active === "month" ? "active" : ""
          }`}
          value={"month"}
          onClick={(e) => changeActive(e)}
        >
          Monthly Plan
        </button>
        <button
          className={`btn-pricing monthly py-[15px] px-[20px] rounded-md text-[15px] font-medium bg-transparent ${
            active === "annual" ? "active" : ""
          }`}
          value={"annual"}
          onClick={(e) => changeActive(e)}
        >
          Annual Plan
        </button>
      </div>
      <div className="pricing-options pt-[3.125rem]">
        <div className="monthly-options flex items-center justify-center mx-auto">
          <div className="pricing-item free w-[390px] flex-[1_1_auto] relative px-[64px] py-[40px]">
            <h4 className="options-name text-[22px] font-bold mb-[6px]">
              Free Plan
            </h4>
            <p className="options-info text-[1rem] font-normal mb-[40px]">
              For Small teams or office
            </p>
            <ul className="options-lists">
              <li className="options-item">
                <button className="tick">
                  <TiTickOutline />
                </button>{" "}
                <span>Drag & Drop Builder</span>
              </li>
              <li className="options-item">
                <button className="tick">
                  <TiTickOutline />
                </button>{" "}
                <span>1,000's of Templates</span>
              </li>
              <li className="options-item">
                <button className="tick">
                  <TiTickOutline />
                </button>{" "}
                <span>Blog Support Tools</span>
              </li>
              <li className="options-item">
                <button className="tick">
                  <TiTickOutline />
                </button>{" "}
                <span>eCommerce Store </span>
              </li>
            </ul>
            <h4 className="options-price"></h4>
            <button className="btn btn-option"></button>
          </div>
          <div className="pricing-item business w-[390px] flex-[1_1_auto] relative  px-[64px] py-[40px]">
            <h4 className="options-name text-[22px] font-bold mb-[6px]">
              Business Plan
            </h4>
            <p className="options-info text-[1rem] font-normal mb-[40px]">
              For Enterprise business
            </p>
            <ul className="options-lists">
              <li className="options-item">
                <button className="tick">
                  <TiTickOutline />
                </button>{" "}
                <span>Drag & Drop Builder</span>
              </li>
              <li className="options-item">
                <button className="tick">
                  <TiTickOutline />
                </button>{" "}
                <span>1,000's of Templates</span>
              </li>
              <li className="options-item">
                <button className="tick">
                  <TiTickOutline />
                </button>{" "}
                <span>Blog Support Tools</span>
              </li>
              <li className="options-item">
                <button className="tick">
                  <TiTickOutline />
                </button>{" "}
                <span>eCommerce Store </span>
              </li>
            </ul>
            <h4 className="options-price"></h4>
            <button className="btn btn-option"></button>
          </div>
          <div className="pricing-item pro w-[390px] flex-[1_1_auto] relative px-[64px] py-[40px]">
            {" "}
            <h4 className="options-name text-[22px] font-bold mb-[6px]">
              Pro Master
            </h4>
            <p className="options-info text-[1rem] font-normal mb-[40px]">
              For pro level developers
            </p>
            <ul className="options-lists">
              <li className="options-item">
                <button className="tick">
                  <TiTickOutline />
                </button>{" "}
                <span>Drag & Drop Builder</span>
              </li>
              <li className="options-item">
                <button className="tick">
                  <TiTickOutline />
                </button>{" "}
                <span>1,000's of Templates</span>
              </li>
              <li className="options-item">
                <button className="tick">
                  <TiTickOutline />
                </button>{" "}
                <span>Blog Support Tools</span>
              </li>
              <li className="options-item">
                <button className="tick">
                  <TiTickOutline />
                </button>{" "}
                <span>eCommerce Store </span>
              </li>
            </ul>
            <h4 className="options-price"></h4>
            <button className="btn btn-option"></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
