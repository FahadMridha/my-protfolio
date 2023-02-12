import React from "react";
import { FaDownload } from "react-icons/fa";
import bannerImage from "../../assets/images/fahad.jpg";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Banner = () => {
  return (
    <div className="bg-[#2A2C39]">
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left"
          >
            <h1 className="text-2xl sm:text-4xl font-bold">
              <span>Hello! I'm</span>
              <br />
              <span className="text-4xl sm:text-6xl md:text-5xl lg:text-6xl xl:text-7xl block mt-2">
                MD.Badsha fahadh
              </span>
            </h1>
            <p className="my-5 text-lg sm:mb-12">
              I’m a web developer specializing in
              <span className=" text-xl font-bold"> react js</span>
              . The main focus is front-end, but at the same time,
              <br className="hidden md:inline lg:hidden" />I try to learn new
              technology also. Currently, I’m focused on learning mern stack
              development.
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://drive.google.com/file/d/1-J2S6CmbVRDmJ3GTmKKlYaWIvqD2-rxV/view?usp=share_link"
                className="btn btn-outline rounded-lg font-medium lg:px-8 lg:btn-md text-base"
              >
                My Resume&nbsp;&nbsp; <FaDownload className="text-sm" />
              </a>
            </div>
          </div>
          <div
            data-aos="flip-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          >
            <img
              src={bannerImage}
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
