import React from "react";
import Navbar from "./Components/Navbar";
import AddProjectInfoForm from "./Components/AddProjectInfoForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Content from "./Content";
import Validation from "./Components/Validation";
import PortfolioState from "./context/notes/portfolioState";

export default function App() {
  return (
    <PortfolioState>
      <Router>
        <div className="text-gray bg-matt-black bg-repeat font-poppins flex max-w-screen ">
          <div className="">
            <Navbar />
          </div>
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/addprojectinfo" element={<AddProjectInfoForm />} />
            <Route path="/validation" element={<Validation />} />
          </Routes>
        </div>
      </Router>
    </PortfolioState>
  );
}
