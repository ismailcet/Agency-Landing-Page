import React from "react";
import { TiTickOutline } from "react-icons/ti";
const Pricing = () => {
  return (
    <section className="pricing">
      <div className="pricing-titles">
        <p className="pricing-info">Pricing Plan</p>
        <h3 className="pricing-title">Choose your pricing policy</h3>
      </div>
      <div className="button-section">
        <button className="btn-pricing monthly">Monthly Plan</button>
        <button className="btn-pricing annual">Annual Plan</button>
      </div>
      <div className="pricing-options">
        <div className="free">
          <h4 className="options-name">Free Plan</h4>
          <p className="options-info">For Small teams or office</p>
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
        <div className="business">
          <h4 className="options-name">Business Plan</h4>
          <p className="options-info">For Enterprise business</p>
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
        <div className="pro">
          {" "}
          <h4 className="options-name">Pro Master</h4>
          <p className="options-info">For pro level developers</p>
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
    </section>
  );
};

export default Pricing;
