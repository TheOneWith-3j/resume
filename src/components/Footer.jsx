import React from "react";
import { Link } from "react-router-dom";
import resumeData from "../utils/resumeData";

const Footer = () => {
  return (
    <>
      <div className="flex w-full font-Poppins bg-gradient-to-b from-transparent to-black to-40% p-2 rounded-t-xl border-t-4 border-yellow-200 flex-wrap">
        <div className="w-full flex flex-col  rounded-xl justify-between flex-wrap">
          <div className="mt-2 ml-3 mr-3 text-yellow-300 ">
            <span className="text-md font-Poppins font-semibold float-left">
              Developed by{" "}
              <h2 className="font-semibold my-t-4 ">
              <a
                href={resumeData.social.Linkedin.link}
                target="_blank"
                className="no-underline text-white"
              >
                {resumeData.name}
              </a>
            </h2>
            </span>

            <div className="text-right">
            <h4 className="font-semibold my-t-4 ">Quick Links</h4>
              <ul>
                <li className="text-slate-800 hover:scale-105 transition-all duration-500 ">
                  <Link to={"/"} className="text-white no-underline">Resume</Link>
                </li>
                <li className="text-slate-800 hover:scale-105 transition-all duration-500 ">
                  <Link to={"/portfolio"} className="text-white no-underline">Portfolio</Link>
                </li>
                
                <li className="text-white hover:scale-105 transition-all duration-500 ">
                  <Link to={"/contact"} className="text-white no-underline">Contact</Link>
                </li>
              </ul>
            </div>
            <p className="text-sm items-center text-center pt-2 mb-0">
              All Rights Reserved | {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
