import React from "react";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Experience from "./Components/Experience";
import Contact from "./Components/Contact";

const Content = () => {
  return (
    <div className="flex flex-col  ">
      <Header />
      <Banner />
      <About />
      <Projects />
      {/* <Experience /> */}
      <Contact />
    </div>
  );
};

export default Content;
