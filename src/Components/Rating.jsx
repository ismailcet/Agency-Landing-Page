import React from "react";
import { FaStar } from "react-icons/fa";

const Rating = ({ rating }) => {
  const totalRating = [];

  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      totalRating.push(
        <li className="star text-mainColor" key={`rating-key${i}`}>
          <FaStar />
        </li>
      );
    } else {
      totalRating.push(
        <li className="star-o text-[#e4e4e4]" key={`rating-key${i}`}>
          <FaStar />
        </li>
      );
    }
  }
  return (
    <div className="rating mb-2">
      <ul className="flex ">{totalRating}</ul>
    </div>
  );
};

export default Rating;
