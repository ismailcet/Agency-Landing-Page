import React from "react";
import Rating from "./Rating";
import Avatar1 from "../assets/testimonial/avatar1.png";
import Avatar2 from "../assets/testimonial/avatar2.png";
import Avatar3 from "../assets/testimonial/avatar3.png";
import Avatar4 from "../assets/testimonial/avatar4.png";

const TestimonialCard = ({ person }) => {
  return (
    <div className="testimonial-card">
      <div className="person-up mb-[2.25rem]">
        <Rating rating={person.review} />
        <h4 className="person-title text-[1rem] font-semibold mb-[1.25rem]">
          {person.title}
        </h4>
        <p className="person-info text-[18px] font-light">
          {person.description}
        </p>
      </div>
      <div className="person-down flex items-center justify-start gap-5">
        <div className="person-image">
          <img src={person.avatar} alt="Person Image" />
        </div>
        <div className="person-text">
          <h3 className="person-name text-[1rem] font-bold">{person.name}</h3>
          <p className="person-designation text-mainColor text-[15px] font-normal">
            {person.designation}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
