import React from "react";
import Home from "../home/header/homes/Home";
import Branding from "../home/header/homes/Branding";
import About from "../home/about/About";
import Service from "../home/services/Service";
import Wrapper from "../home/Wrapper";
import Skill from "../home/header/homes/Skill";
import WrapperOne from "../home/WrapperOne";
import Work from "../home/header/homes/work/Work";
import Blog from "../home/blog/Blog";

const HomePages = () => {
  return (
    <>
      <Home />
      <Branding />
      <About />
      <Service />
      <Wrapper />
      <Skill />
      <WrapperOne />
      <Work />
      <Blog />
    </>
  );
};

export default HomePages;
