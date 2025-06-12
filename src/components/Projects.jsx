import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { SectionHeading } from "./SectionHeading";
import { projects } from "./arrays";

export const Projects = () => {
  var settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    pauseOnHover: true,
    autoplaySpeed: 1000,
    speed: 2000,
    slidesToShow: 4 ,
    slidesToScroll: 1,
        cssEase: "linear",

    responsive: [
      {
        breakpoint: 1440, // From 900 to 1100
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1100, // From 768 to 900
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 800, // Below 768
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <section className="~/xl:~mt-8/20 mb-20">
      <div className="w-full mx-auto max-w-[1660px]  ~/xl:~px-6/40    ">
        <div>
          <SectionHeading firstTitle="Our" secondTitle="Projects" />
        </div>
        <div className="mt-8">
          <Slider className="" {...settings}>
            {projects.map((project, index) => (
              <div className="px-2 md:px-6" key={index}>
                <div className="flex  flex-col items-center justify-center p-4 bg-white/10 border border-primary/70 rounded-lg space-y-2 ">
                  <div className="~sm/xl:~w-7/12  h-auto  mx-auto">
                    <img src={project.icon} className="w-full h-auto" />
                  </div>
                  <h3 className="~sm/xl:~text-xs/base text-center text-[#A98BFF]">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};
