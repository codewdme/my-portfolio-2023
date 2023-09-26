import React from "react";

export default function WorkExperience() {
  return (
    <>
      <div className="flex flex-col gap-4 px-3 mb-6">
        <div className="flex justify-between items-center">
          <div className="work-subheading text-brand-white">Google</div>
          <div className=" font-normal text-brand-white">2022 - Present</div>
        </div>
        <div className="flex justify-between items-center">
          <div className="font-bold text-neon-green">Software Engineer</div>
          <div className="  font-normal text-brand-white">Atlanta</div>
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
          suscipit a voluptates et nihil, maiores saepe, libero, facere cum
          dicta reiciendis aut doloribus impedit quia.
        </div>
        <div className="flex gap-3 mb-6">
          <span className="capsule">React JS</span>
          <span className="capsule">Express</span>
          <span className="capsule">MongoDB</span>
          <span className="capsule">Node-JS</span>
          <span className="capsule">Tailwind CSS</span>
          <span className="capsule">HTML</span>
          <span className="capsule">CSS</span>
          <span className="capsule">JavaScript</span>
        </div>
        <div className=" bg-button-gray h-[0.75px] w-full flex items-center"></div>
      </div>
    </>
  );
}
