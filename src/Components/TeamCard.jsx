import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const TeamCard = ({ user }) => {
  return (
    <div className="team-card px-[50px] py-[25px] flex items-center justify-center flex-col relative">
      <div className="people-image mb-[30px]">
        <img
          src={user.picture.large}
          alt="People Img"
          className="rounded-full object-center-top border-2 border-solid border-mainColor w-[130px] h-[130px]"
        />
      </div>
      <div className="people-info">
        <h4 className="people-name text-[22px] font-bold text-center">{`${user.name.first} ${user.name.last}`}</h4>
        <p className="people-info text-base font-normal text-pColor">
          {user.email}
        </p>
      </div>
      <div className="social-icons text-mainColor absolute right-4 bottom-5 flex flex-col pt-[10px] items-center justify-center">
        <a href="https://github.com/ismailcet" className="icon text-base">
          <FaFacebookF />
        </a>
        <a href="https://github.com/ismailcet" className="icon">
          <FaTwitter />
        </a>
        <a href="https://github.com/ismailcet" className="icon">
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};

export default TeamCard;
