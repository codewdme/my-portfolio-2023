import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import portfolioContext from "../context/notes/portfolioContext";

const AddProjectInfoForm = () => {
  const navigate = useNavigate();
  const propData = useContext(portfolioContext);

  const [formData, setFormData] = useState({
    projectName: "",
    description: "",
    tags: "",
    imageUrl: "",
    hostingUrl: "",
    githubRepoUrl: "",
    hostingUrl: "",
  });

  const handleClick = () => {
    propData.setUploadInfo(formData);
    setTimeout(() => {
      navigate("/validation");
    }, 1000);
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <div className=" w-full flex justify-center items-center p-16 ">
      <div className="w-full">
        <div className="text-brand-white font-extrabold text-4xl pb-8">
          ADD PROJECT INFO
        </div>
        <form className=" flex flex-col gap-4 rounded ">
          <div className="grid grid-cols-2 gap-4">
            <div className="">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="projectName"
              >
                PROJECT NAME
              </label>
              <input
                onChange={onChange}
                className="shadow appearance-none  border border-neon-green  rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                id="projectName"
                type="text"
              />
            </div>
            <div className="">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="tags"
              >
                SKILLS USED
              </label>
              <input
                onChange={onChange}
                className="shadow appearance-none  border border-neon-green rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                id="tags"
                type="text"
              />
            </div>
            <div className="col-span-2">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="description"
              >
                DESCRIPTION
              </label>
              <input
                onChange={onChange}
                className="shadow appearance-none  border border-neon-green rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                id="description"
                type="text"
              />
            </div>

            <div className="">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="imageUrl"
              >
                IMAGE URL
              </label>
              <input
                onChange={onChange}
                className="shadow appearance-none  border border-neon-green rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                id="imageUrl"
                type="text"
              />
            </div>
            <div className="">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="hostingUrl"
              >
                HOSTING URL
              </label>
              <input
                onChange={onChange}
                className="shadow appearance-none  border border-neon-green rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                id="hostingUrl"
                type="text"
              />
            </div>
            <div className="">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="githubRepoUrl"
              >
                GITHUB REPO URL
              </label>
              <input
                onChange={onChange}
                className="shadow appearance-none  border border-neon-green rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                id="githubRepoUrl"
                type="text"
              />
            </div>
            <div className="">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="year"
              >
                YEAR
              </label>
              <input
                onChange={onChange}
                className="shadow appearance-none  border border-neon-green rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                id="year"
                type="number"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <motion.button
              className="border-[1px] border-neon-green text-neon-green hover:bg-neon-green hover:text-matt-black rounded-md py-3 px-6 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              type="button"
              onClick={handleClick}
            >
              Proceed
            </motion.button>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2023 codewdme All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default AddProjectInfoForm;
