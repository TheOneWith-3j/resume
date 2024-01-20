import React from "react";
import { Link } from "react-router-dom";
import resumeData from "../utils/resumeData";
import { useState, useEffect } from "react";

const Footer = () => {


  // Check if session ID exists in localStorage
  let sessionId = localStorage.getItem('sessionId');

  // If not, generate a new one and store it
  if (!sessionId) {
    sessionId = generateSessionId();
    localStorage.setItem('sessionId', sessionId);
  }

  function generateSessionId() {
    // Generate a random string or use a library to create a unique ID
    // For simplicity, this example uses a random string of 10 characters
    return Math.random().toString(36).substring(2, 12);
  }

  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    // Make a POST request when the component mounts (user arrives on the website)
    fetch('http://localhost:8081/visit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({sessionId})
    });

    // Fetch visit count when the component mounts
    fetch('http://localhost:8081/visit-count')
      .then((response) => response.json())
      .then((data) => setVisitCount(data.visitCount))
      .catch((error) => console.error('Error fetching visit count:', error));
  }, []);
  

  // Periodically poll the server to keep the session active
setInterval(() => {
  fetch('http://localhost:8081/poll', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ sessionId }),
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
}, 15000); // Poll every 30 seconds (adjust as needed)


  window.addEventListener('beforeunload', () => {
    fetch('http://localhost:8081/leave', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ sessionId }),
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
  });








  // const pageviewsCount = document.getElementById('pageviews-count');
  // const visitCount = document.getElementById('visit-count')
  // if (sessionStorage.getItem('visit') === null) {
  //   // New visit and pageview
  //   updateCounter('type=visit-pageview');
  // } else {
  //   // Pageview
  //   updateCounter('type=pageview');
  // }
  
  // function updateCounter(type) {
  
  //   fetch('http://localhost:8081/api?'+type) // Dynamic request with URL parameter
  //     .then(res => res.json())
  //     .then(data => {
  //       pageviewsCount.textContent = data.pageviews; // Display pageviews to user
  //       visitCount.textContent = data.visits; // Display visits to user
  //     })
  
  // }
  
  // sessionStorage.setItem('visit', 'x');
  // // 'visit' item persists in storage for the remainder of the user session



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
                  <Link to={"/resume"} className="text-white no-underline">Resume</Link>
                </li>
                <li className="text-slate-800 hover:scale-105 transition-all duration-500 ">
                  <Link to={"/resume/portfolio"} className="text-white no-underline">Portfolio</Link>
                </li>
                
                <li className="text-white hover:scale-105 transition-all duration-500 ">
                  <Link to={"/resume/contact"} className="text-white no-underline">Contact</Link>
                </li>
              </ul>
            </div>
            <p className="text-sm items-center text-center pt-2 mb-0">
              <span id="pageviews-count">Total Visits: {visitCount}</span> | All Rights Reserved | {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
