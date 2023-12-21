import React from 'react'
import { Container, Grid } from "@material-ui/core";
import mypic from "../assets/mypic.jpg";
import backgroundImage from "../assets/bgimg.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import CustomTimeline, {
  CustomTimelineSeparator,
} from "../components/Timeline";
import resumeData from '../utils/resumeData';
import PersonIcon from "@mui/icons-material/Person";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineContent from "@mui/lab/TimelineContent";
import DownloadIcon from "@mui/icons-material/DownloadRounded"
import Header from "../components/Header";

const Profile = () => {
  return (
    <div>
      
      <div className="mx-4 my-4 p-2 h-auto cursor-pointer hover:scale-y-105 transition-all duration-300 bg-gradient-to-t from-transparent to-black to-40% text-yellow-200 justify-start border-b-4 border-yellow-200 rounded-xl">
                <p className="font-black text-2xl uppercase">{resumeData.name}</p>
                <p className="">{resumeData.designation}</p>
              </div>

              <div className="flex items-center w-full justify-center ">
                  <img
                    src={mypic}
                    alt="my image"
                    // className="p-5 rounded-full w-72 cursor-auto"
                    className="clip polygon cursor-auto"
                  />
              </div>  
              <div className="p-5 -mx-5 cursor-pointer hover:scale-y-105 transition-all duration-300 text-yellow-200">
                <div className="-my-7">
                  <CustomTimeline icon={<PersonIcon />} title="Personal Info">
                    <CustomTimelineItem title='Name' text={resumeData.name}/>
                    <CustomTimelineItem title='Designation' text={resumeData.designation}/>
                    <CustomTimelineItem title='Email' text={resumeData.email}/>
                    {Object.keys(resumeData.social).map(key=>(
                      <CustomTimelineItem title={key} text={resumeData.social[key].text} link={resumeData.social[key].link}/>
                    ))}
                  </CustomTimeline>
                </div>
              </div>
              <div
                    // onClick={handleClick}
                    className="mt-4 bg-yellow-300 shadow-2xl m-4 p-3 rounded-full  cursor-pointer hover:bg-yellow-200"
                  >
                    <p className="font-Poppins text-xl text-black m-1 text-center font-semibold">
                      Download Resume {<DownloadIcon/>}
                    </p>
              </div>
    </div>
  )
}

const CustomTimelineItem = ({ title, text, link }) => (
    <TimelineItem>
      <CustomTimelineSeparator />
      <TimelineContent>
        {link ? (
          <p>
            <span className="font-bold">{title}: </span> <a href={link} target="_blank" className="inline-flex underline text-yellow-100 pt-2 overflow-x-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap text-brand-accent will-change-transform">{text}</a>
          </p>
        ) : (
          <p>
            <span className="font-bold">{title}: </span>
            <span className="inline-flex text-yellow-100 overflow-x-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap text-brand-accent will-change-transform">{text}</span>
          </p>
        )}
      </TimelineContent>
    </TimelineItem>
  );


export default Profile
