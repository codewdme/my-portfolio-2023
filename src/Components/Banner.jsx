import React from "react";
import { Link } from "react-scroll";

export default function Banner() {
  return (
    <section id="banner" className="">
      <div className="section-item md:p-[9.6rem] p-12">
        <div className="content">
          {" "}
          <div>
            <span className="text-6xl sm:text-8xl text-brand-white font-black">
              Hey, I'm Vraj
            </span>
            <span className="text-6xl sm:text-8xl text-neon-green font-black">
              .
            </span>
          </div>
          <div className=" mt-5">
            <span className="text-4xl text-brand-white font-extralight   ">
              I'm a{" "}
            </span>
            <span className="text-4xl text-neon-green font-semibold">
              Front End Developer
            </span>
          </div>
          <p className="py-6 section-content">
            "Seeking to elevate your{" "}
            <span className="text-neon-green">online presence? </span> As a
            skilled front-end developer, I craft dynamic websites using ReactJS
            and Tailwind CSS, delivering captivating designs and seamless user
            experiences. Let's collaborate and bring your vision to life."
          </p>
          <Link
            to="contact"
            activeClass="active"
            smooth={true}
            spy={true}
            className="text-lg py-3 px-6 text-matt-black bg-neon-green hover:bg-brand-white rounded-md"
          >
            Contact me
          </Link>
        </div>
      </div>
    </section>
  );
}
