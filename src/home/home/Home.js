import React from "react";
import AboutMe from "../aboutMe/AboutMe";
import Banner from "../banner/Banner";
import ContactUs from "../ContactUs/ContactUs";
import Projects from "../projects/Projects";

const Home = () => {
  return (
    <div>
      <Banner />
      <Projects />
      <AboutMe />
      <ContactUs />
    </div>
  );
};

export default Home;
