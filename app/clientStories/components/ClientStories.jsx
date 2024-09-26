"use client";
import React from "react";
import "../css/clientStories.css";
import { clientDetails } from "../../../assets/clientDetails";
import ClientComponent from "./ClientComponent";
import Slider from "react-slick";

const ClientStories = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 3000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="min-h-[50vh] clientStoriesBubble p-10 pt-20 flex lg:flex-row flex-col lg:justify-between ">
      <div className="flex flex-col gap-5">
        <div className="clientTitle text-3xl  md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold">
          My Client's Stories
        </div>
        <div className="text-[--client-stories-text] text-md  md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
          Empowering people in new a digital journey with my super services
        </div>
      </div>
      <div className="lg:max-w-[40vw] lg:min-w-[50%] mt-5">
        <Slider {...settings}>
          {clientDetails.map((clientDetail) => (
            <div key={clientDetail.id} className="px-4">
              <ClientComponent props={clientDetail} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ClientStories;
