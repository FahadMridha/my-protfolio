import React from "react";
import AboutMe from "../aboutMe/AboutMe";
import Banner from "../banner/Banner";
import Blog from "../blog/Blog";
import ContactUs from "../ContactUs/ContactUs";
import Projects from "../projects/Projects";

const Home = () => {
  return (
    <div>
      <Banner />
      <Projects />
      <AboutMe />
      <ContactUs />
      <Blog />
    </div>
  );
};

export default Home;
