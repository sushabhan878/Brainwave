import React from "react";
import { loading } from "../assets";
const Generating = ({ className }) => {
  return (
    <div
      className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${
        className || ""
      } text-base`}
    >
      <img src={loading} alt="Loading Image" className="w-5 h-5 mr-4" />
      IA is Replying
    </div>
  );
};

export default Generating;
