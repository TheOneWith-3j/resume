// import React from 'react'

// const Tabs = () => {
//   return (
//     <Navbar
//         expand="lg"
//         sticky="top"
//         className="w-full flex backdrop-blur-3xl top-0 start-0 border-b-4 bg-gradient-to-t from-transparent to-black to-40% dark:border-yellow-200 rounded-xl"
//       >

//         <Navbar.Toggle />
//         {console.log(pathName)}
//         <Navbar.Collapse className="p-2">
//           <Nav className="mr-auto">
//             {/* Resume Link */}
//             <Nav.Link
//               as={NavLink}
//               to="/"
//               className={pathName ==  "/" ? "active" : "text-white bg"}
//             >
//               <p className="text-xl my-1 hover:text-yellow-200">Resume</p>
//             </Nav.Link>

//             {/* Portfolio Link */}
//             <Nav.Link
//               as={NavLink}
//               to="/portfolio"
//               className={pathName === "/portfolio" ? "text-yellow-300" : "text-white"}
//             >
//               <p className="text-xl my-1 hover:text-yellow-200">Portfolio</p>
//             </Nav.Link>

//             {/* Socials Link */}
//             <Nav.Link
//               as={NavLink}
//               to="/socials"
//               className={pathName === "/socials" ? "text-yellow-300" : "text-white"}
//             >
//               <p className="text-xl my-1 hover:text-yellow-200">Socials</p>
//             </Nav.Link>

//             {/* Contact Link */}
//             <Nav.Link
//               as={NavLink}
//               to="/contact"
//               className={pathName === "/contact" ? "text-yellow-300" : "text-white "}
//             >
//               <p className="text-xl my-1 hover:text-yellow-200">Contact</p>
//             </Nav.Link>

//           </Nav>

//           <div className="">
//             {Object.keys(resumeData.social).map(key=>(
//               <a href={resumeData.social[key].link} target="_blank" className="text-yellow-300 p-1 mr-2 hover:text-yellow-200">{resumeData.social[key].icon}</a>
//             ))}

//           </div>

//           <div
//               // onClick={handleClick}
//               className="bg-yellow-300 shadow-2xl ml-2 mt-2 mr-3 mb-2 p-2 rounded-full  cursor-pointer hover:bg-yellow-200"
//             >
//               <p className="font-Poppins text-xl text-black m-1 text-center font-semibold">
//                 Hire Me! {<Telegram/>}
//               </p>
//             </div>
//         </Navbar.Collapse>
//       </Navbar>
//   )
// }

// export default Tabs

import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import resumeData from "../utils/resumeData";
import { Link, NavLink, useLocation, withRouter } from "react-router-dom";

const CustomTabs = () => {
  const pathName = useLocation().pathname;

  return (
    <Navbar
      expand="lg"
      sticky="top"
      className="w-full flex backdrop-blur-3xl top-0 start-0 bg-gradient-to-t from-transparent to-black to-40% dark:border-yellow-100 rounded-xl font-Poppins"
    >
      <Navbar.Toggle />
      {console.log(pathName)}
      <Navbar.Collapse className="p-2">
        <Nav className="mr-auto">
          <Nav.Link
            as={NavLink}
            to={"/portfolio/all"}
            className={
              pathName === "/all"
                ? "text-yellow-300 border-b-2 border-yellow-300"
                : "text-white "
            }
          >
            <p className=" hover:text-yellow-200 border-b-2 p-1 ">All</p>
          </Nav.Link>
          {[...new Set(resumeData.projects.map((item) => item.tag))].map(
            (tag) => (
              <Nav.Link
                as={NavLink}
                to={"/portfolio/".concat(tag)}
                className={
                  pathName === "/all"
                    ? "text-yellow-300 border-b-2 border-yellow-300"
                    : "text-white "
                }
              >
                <p className=" hover:text-yellow-200 border-b-2 p-1 ">{tag}</p>
              </Nav.Link>
            )
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomTabs;
