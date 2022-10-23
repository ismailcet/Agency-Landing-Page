import React from "react";
import Slider from "react-slick";

import Avatar1 from "../assets/testimonial/avatar1.png";
import Avatar2 from "../assets/testimonial/avatar2.png";
import Avatar3 from "../assets/testimonial/avatar3.png";
import Avatar4 from "../assets/testimonial/avatar4.png";

const Clients = () => {
  const data = [
    {
      id: 1,
      title: "Modern look & trending design",
      description:
        "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
      avatar: Avatar1,
      name: "Denny Hilguston",
      designation: "@denny.hil",
      review: 4,
    },
    {
      id: 2,
      title: "Design Quality & performance",
      description:
        "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
      avatar: Avatar2,
      name: "Denny Hilguston",
      designation: "@denny.hil",
      review: 5,
    },
    {
      id: 3,
      title: "Layout and organized layers",
      description:
        "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
      avatar: Avatar3,
      name: "Denny Hilguston",
      designation: "@denny.hil",
      review: 5,
    },
    {
      id: 4,
      title: "Modern look & trending design",
      description:
        "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
      avatar: Avatar4,
      name: "Denny Hilguston",
      designation: "@denny.hil",
      review: 4,
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  console.log(data[0].name);
  return (
    <section className="testimonial mt-40 flex flex-col items-center justify-center">
      <div className="testimonial-up text-center mb-[4.5rem]">
        <p className="team-info uppercase font-semibold text-[14px] text-mainColor mb-2">
          Testimonial
        </p>
        <h3 className="team-title text-[2rem] font-bold mb-[2.25rem]">
          Meet Client Satisfaction
        </h3>
      </div>
      <div className="testimonial-down">
        <Slider {...settings}>
          <div className="item-card">
            <h1>{data[0].name}</h1>
          </div>
          <div className="item-card">
            <h1>{data[1].name}</h1>
          </div>
          <div className="item-card">
            <h1>{data[2].name}</h1>
          </div>
          <div className="item-card">
            <h1>{data[3].name}</h1>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Clients;
