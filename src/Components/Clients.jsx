import React from "react";
import Slider from "react-slick";

import TestimonialCard from "./TestimonialCard";
import Avatar1 from "../assets/testimonial/avatar1.png";
import Avatar2 from "../assets/testimonial/avatar2.png";
import Avatar3 from "../assets/testimonial/avatar3.png";
import Avatar4 from "../assets/testimonial/avatar4.png";

import "../slick.css";
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
    {
      id: 5,
      title: "Modern look & trending design",
      description:
        "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
      avatar: Avatar4,
      name: "Denny Hilguston",
      designation: "@denny.hil",
      review: 4,
    },
    {
      id: 6,
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
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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
  return (
    <section className="testimonial mt-40 flex flex-col items-center justify-center">
      <div className="testimonial-up text-center">
        <p className="team-info uppercase font-semibold text-[14px] text-mainColor mb-2">
          Testimonial
        </p>
        <h3 className="team-title text-[2rem] font-bold">
          Meet Client Satisfaction
        </h3>
      </div>

      <Slider {...settings}>
        <TestimonialCard person={data[0]} />
        <TestimonialCard person={data[1]} />
        <TestimonialCard person={data[2]} />
        <TestimonialCard person={data[3]} />
        <TestimonialCard person={data[4]} />
        <TestimonialCard person={data[5]} />
      </Slider>
    </section>
  );
};

export default Clients;
