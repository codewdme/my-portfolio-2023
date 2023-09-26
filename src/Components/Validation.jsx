import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import portfolioContext from "../context/notes/portfolioContext";

const Validation = () => {
  const propData = useContext(portfolioContext);
  const navigate = useNavigate();

  const [password, setPassword] = useState("");

  const handleClick = async () => {
    if (password === "@-codewdme-portfolio" && propData.uploadInfo !== []) {
      let message = await propData.addProjectInfo();
      console.log(message);

      setTimeout(() => {
        navigate("/");
      }, 10000);
    } else if (
      password === "@-codewdme-portfolio" &&
      propData.uploadInfo === []
    ) {
      alert("Re-enter File details and try again");
      navigate("/addprojectinfo");
    } else {
      alert("Wrong password -- please try again.");
    }
  };

  const onChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="flex justify-center items-center p-16 ">
      <div className="w-full ">
        <form className=" flex flex-col gap-4 rounded ">
          <div className="">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="password"
            >
              PASSWORD
            </label>
            <input
              onChange={onChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="**************"
            />
          </div>

          <div className="flex items-center justify-between">
            <motion.button
              className="border-[1px] border-neon-green text-neon-green hover:bg-neon-green hover:text-matt-black rounded-md py-3 px-6 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              type="button"
              onClick={handleClick}
            >
              Upload
            </motion.button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Validation;
