import React, { useState } from "react";
import portfolioContext from "./portfolioContext";

const PortfolioState = (props) => {
  const [projects, setProjects] = useState([]);
  const [uploadInfo, setUploadInfo] = useState([]);
  const host = "https://naughty-lion-train.cyclic.app";

  // api call to fetch PROJECTS information from backend.
  const fetchProjectInfo = async () => {
    console.log("run");
    let url = `${host}/codewdme/portfolio/fetchprojectinfo`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    setProjects(json);
  };

  // ADDING PROJECT INFO TO DB
  const addProjectInfo = async () => {
    let url = `${host}/codewdme/portfolio/addprojectinfo`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(uploadInfo),
    });
    const json = await response.json();
    return json;
  };

  return (
    <portfolioContext.Provider
      value={{
        fetchProjectInfo,
        addProjectInfo,
        setUploadInfo,
        uploadInfo,
        projects,
      }}
    >
      {props.children}
    </portfolioContext.Provider>
  );
};

export default PortfolioState;
