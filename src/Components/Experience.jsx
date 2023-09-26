import React from "react";
import WorkExperience from "./WorkExperience";

export default function Experience() {
  return (
    <section id="workexperience" className="">
      <div className="md:p-[9.6rem] max-w-6xl">
        <div className="section-heading flex gap-6 items-center">
          <div className="heading">
            <span>Experience</span>
            <span className="text-neon-green ">.</span>
          </div>
          <div className="header-line"></div>
        </div>

        <div className="section-content">
          <WorkExperience />
          <WorkExperience />
          <WorkExperience />
        </div>
      </div>
    </section>
  );
}
