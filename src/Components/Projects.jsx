import { useContext, useEffect, useState } from "react";
import React from "react";
import ProjectsCard from "./ProjectsCard";
import portfolioContext from "../context/notes/portfolioContext";

export default function Projects() {
  const propData = useContext(portfolioContext);

  // const [state, setState] = useState([
  //   {
  //     projectName: projectName,
  //     description: description,
  //     tags: tags,
  //     imageUrl: imageUrl,
  //     hostingUrl: hostingUrl,
  //     githubRepoUrl: githubRepoUrl,
  //     year: year,
  //   },
  // ]);

  // async function fetchprojectinfo() {
  //   const host = "`http://localhost:5000"; // set your backend server url

  //   let url = `${host}/portfolio/fetchprojectinfo/`;

  //   const response = await fetch(url, {
  //     method: "GET",

  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   const json = await response.json();

  //   setState(json);
  // }

  // rendering request of projects.

  const Projects = [
    {
      projectName: "JU NEXUS",
      description:
        "JU Nexus is a comprehensive platform catering to the needs of JU students, offering seamless access to a repository of previous year question papers, notes, assignments, syllabus, and more.",
      imageUrl: "https://ibb.co/gT639wh",
      url: "https://ju-nexus.web.app/",
      githubRepoUrl: "https://github.com/codewdme/JU-Nexus.git",
      tags: "ReactJS - TailwindCSS - Express - NodeJS - MongoDB - Firebase",
    },
    {
      projectName: "NEWS MONKEY",
      description:
        "Curated news at your fingertips. My website fetches real-time updates from APIs, keeping you informed with the latest stories.",
      imageUrl: "https://i.ibb.co/544tMNb/news-monkey.png",
      hostingUrl: "https://news-monkey-reactbased.web.app/",
      githubRepoUrl: "https://github.com/codewdme/news-monkey.git",
      tags: "ReactJS - JavaScript - API - Firebase",
      year: 2023,
    },
    {
      projectName: "ATTENDANCE CALCULATOR",
      description:
        "About React-Website to calculate attendance, leaves available and much more.",
      imageUrl: "https://i.ibb.co/5sNPGvt/attendance-calculator.png",
      url: "https://codewdme.github.io/attendance-leave-calculator/",
      githubRepoUrl:
        "https://github.com/codewdme/attendance-leave-calculator.git",
      tags: "ReactJS - TailwindCSS",
    },

    {
      projectName: "YT AUDIO DOWNLOADER",
      description:
        "Download Audio files of youtube Videos at Faster Speeds and with No limits",
      imageUrl: "https://i.ibb.co/1KgFWc0/youtube-mp3-downloader.png",
      url: "https://codewdme.github.io/yt-mp3-downloader/",
      githubRepoUrl: "https://github.com/codewdme/yt-mp3-downloader.git",
      tags: "API - ReactJS - TailwindCSS",
    },
    {
      projectName: "NEWSLETTER SIGNUP PAGE",
      description:
        "Responsive sign up page involving newsletter sign up process.",
      imageUrl: "https://i.ibb.co/1Lcpgy3/newsletter-signup-page.png",
      url: "https://codewdme.github.io/newsletter-sign-up-with-success-message-main/",
      githubRepoUrl:
        "https://github.com/codewdme/newsletter-sign-up-with-success-message-main.git",
      tags: "HTML5 - CSS - JS",
    },
    {
      projectName: "LANDING PAGE",
      description: "Hubble style responsive landing page FrontEnd",
      imageUrl: "https://i.ibb.co/nRCYXnk/landing-page.png",
      url: "https://codewdme.github.io/Hubble-landing-Page-FrontEnd/",
      githubRepoUrl:
        "https://github.com/codewdme/Hubble-landing-Page-FrontEnd.git",
      tags: "HTML5 - CSS",
    },
  ];
  if (propData.projects.length === 0) {
    propData.fetchProjectInfo();
  }
  return (
    <section id="projects" className="Projects pt-16 md:pt-0">
      <div className="lg:p-[9.6rem] max-w-6xl p-12 ">
        <div className="section-heading flex gap-6 items-center">
          <div className="header-line"></div>
          <div className="heading">
            <span>Projects</span>
            <span className="text-neon-green ">.</span>
          </div>
        </div>

        <div className="section-content">
          <div className="grid  sm:grid-cols-1 md:grid-cols-2 w-full gap-8">
            {propData.projects.map((element) => {
              return (
                <div key={element.projectName}>
                  <ProjectsCard element={element} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
