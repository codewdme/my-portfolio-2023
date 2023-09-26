import React from "react";
import Social from "./Social";

export default function About() {
  return (
    <section id="about" className="pt-16 md:pt-0">
      <div className="md:p-[9.6rem] max-w-6xl p-12 ">
        <div className="section-heading flex gap-6 items-center">
          <div className="heading">
            <span>About</span>
            <span className="text-neon-green ">.</span>
          </div>
          <div className="header-line"></div>
        </div>
        <div className="details flex gap-4 flex-col md:flex-row">
          <div className="content flex flex-col w-full md:w-2/3 section-content">
            <div className="para-space">
              <span className="">
                {/* <span className="text-brand-white rounded-md h-[60px] w-[45px] flex justify-center items-center bg-button-gray text-[24px] font-black ">
                  H
                </span> */}
                Hello, I'm <span className="text-neon-green">Vraj</span>, a
                passionate front-end web developer with a knack for crafting
                captivating digital experiences. I specialize in both dynamic
                and static website development, using frameworks like ReactJS
                and Tailwind CSS to bring ideas to life. My expertise lies in
                creating seamless user interfaces that engage and delight
                visitors.
              </span>
            </div>
            <div className="para-space">
              With a focus on dynamic website development, I excel in harnessing
              the power of technologies like ReactJS. I love building
              interactive and feature-rich websites that provide exceptional
              user experiences. My proficiency extends to crafting elegant
              designs using tools like Tailwind CSS, ensuring that each project
              is not only functional but also visually impressive.
            </div>

            <div className="flex">
              <span className="text-neon-green font-normal">
                My links <span className="items-center ml-2"> ➔</span>
              </span>
              <Social />
            </div>
          </div>

          <div className="flex flex-col gap-4 md:w-1/3">
            <div className="flex flex-col mb-6">
              <div className=" section-subheading flex flex-row items-center gap-3 ">
                <span>
                  <svg
                    className="fill-neon-green rounded-md"
                    stroke="currentColor"
                    stroke-width="0"
                    viewBox="0 0 1024 1024"
                    color="var(--brand)"
                    height="24px"
                    width="24px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM513.1 518.1l-192 161c-5.2 4.4-13.1.7-13.1-6.1v-62.7c0-2.3 1.1-4.6 2.9-6.1L420.7 512l-109.8-92.2a7.63 7.63 0 0 1-2.9-6.1V351c0-6.8 7.9-10.5 13.1-6.1l192 160.9c3.9 3.2 3.9 9.1 0 12.3zM716 673c0 4.4-3.4 8-7.5 8h-185c-4.1 0-7.5-3.6-7.5-8v-48c0-4.4 3.4-8 7.5-8h185c4.1 0 7.5 3.6 7.5 8v48z"></path>
                  </svg>
                </span>
                <span>Use at Work</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="capsule">React JS</span>
                <span className="capsule">JavaScript</span>
                <span className="capsule">Tailwind CSS</span>
                <span className="capsule">API</span>
                <span className="capsule">Redux</span>
                <span className="capsule">Node JS</span>
                <span className="capsule">Express JS</span>
                <span className="capsule">MongoDB</span>
              </div>
            </div>

            <div>
              <div className=" section-subheading flex flex-row gap-3 ">
                <span>
                  <svg
                    className="fill-neon-green rounded-md"
                    stroke="currentColor"
                    stroke-width="0"
                    viewBox="0 0 1024 1024"
                    height="24px"
                    width="24px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zM288 421a48.01 48.01 0 0 1 96 0 48.01 48.01 0 0 1-96 0zm224 272c-85.5 0-155.6-67.3-160-151.6a8 8 0 0 1 8-8.4h48.1c4.2 0 7.8 3.2 8.1 7.4C420 589.9 461.5 629 512 629s92.1-39.1 95.8-88.6c.3-4.2 3.9-7.4 8.1-7.4H664a8 8 0 0 1 8 8.4C667.6 625.7 597.5 693 512 693zm176-224a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z"></path>
                  </svg>
                </span>
                <span>Use for Fun</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="capsule">BootStrap</span>
                <span className="capsule">Tailwind CSS</span>
                <span className="capsule">CSS</span>
                <span className="capsule">HTML5</span>
                <span className="capsule">JavaScript</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
