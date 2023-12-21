import React from "react";
import { Container, Grid } from "@material-ui/core";
import resumeData from "../utils/resumeData";
import CustomTimeline, {
  CustomTimelineSeparator,
} from "../components/Timeline";
import { WorkHistory, SchoolRounded } from "@mui/icons-material/";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineContent from "@mui/lab/TimelineContent";
import { Icon, Input, Paper, TextField } from "@mui/material";
import TimelineDot from "@mui/lab/TimelineDot";

const Resume = () => {
  return (
    <>
      {/* about Me */}
      <Grid container className="font-Poppins pb-11 mb-7">
        <Grid
          item
          className=" text-yellow-300 cursor-auto animate-bounce inline-block relative "
        >
          <h3 className="relative border-b-8 mt-7 border-yellow-200 mb-7 whitespace-pre-line">
            About Me
          </h3>
        </Grid>

        <Grid item xs={12}>
          <p className="text-md p-2 justify-betweeen">{resumeData.about_me}</p>
        </Grid>
      </Grid>

      {/* Education and Experiences */}
      <Grid container className="font-Poppins">
        <Grid
          item
          className=" text-yellow-300 cursor-auto animate-bounce inline-block relative "
        >
          <h3 className="relative border-b-8 border-yellow-200 mb-7 whitespace-pre-line">
            Resume
          </h3>
        </Grid>
        <Grid item xs={12}>
          <Grid container className="pb-8 font-Poppins">
            {/* Experiences */}
            <Grid item xs={12} md={6}>
              <CustomTimeline title="Work Experience" icon={<WorkHistory />}>
                {resumeData.experiences.map((experience) => (
                  <TimelineItem>
                    <CustomTimelineSeparator />
                    <TimelineContent>
                      <p className="text-xl  text-yellow-100">
                        {experience.title}
                      </p>
                      <p className="text-md">{experience.date}</p>
                      <p className="text-sm">{experience.description}</p>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>

            {/* Education */}
            <Grid item xs={12} md={6}>
              <CustomTimeline title="Education" icon={<SchoolRounded />}>
                {resumeData.education.map((education) => (
                  <TimelineItem>
                    <CustomTimelineSeparator />
                    <TimelineContent>
                      <p className="text-xl text-yellow-100">
                        {education.title}
                      </p>
                      <p className="text-md">{education.date}</p>
                      <p className="text-sm">{education.description}</p>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* My Services */}

      <Grid container>
        <Grid
          item
          className=" text-yellow-300 cursor-auto animate-bounce inline-block relative "
        >
          <h3 className="relative border-b-8 border-yellow-200 mb-7 mt-7 whitespace-pre-line">
            My Services
          </h3>
        </Grid>

        <Grid container>
          <Grid item xs={12}>
            <Grid container spacing={5} className="justify-around">
              {resumeData.services.map((service) => (
                <Grid item xs={12} sm={6} md={3}>
                  <div className="h-full text-center font-Poppins p-2 shadow-2xl rounded-3xl backdrop-blur-sm ">
                    <div className="text-yellow-300 serviceicon MuiSvgIcon-root">
                      {service.icon}
                    </div>
                    <p className="text-yellow-100 text-lg font-semibold leading-8">
                      {service.title}
                    </p>
                    <p className="text-center">{service.description}</p>
                  </div>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Skills */}
      <Grid container className="mt-7 pb-7">
        <Grid
          item
          className=" text-yellow-300 cursor-auto animate-bounce inline-block relative "
        >
          <h3 className="relative border-b-8 border-yellow-200 mb-7 mt-7 whitespace-pre-line">
            Skills
          </h3>
        </Grid>

        <Grid container className="justify-between" spacing={3}>
          {resumeData.skills.map((skill) => (
            <Grid item xs={12} sm={6} md={3}>
              <div className="h-full  p-3 shadow-2xl rounded-3xl backdrop-blur-sm">
                <p className="text-lg text-yellow-100 font-Poppins font-semibold text-center">
                  {skill.title}
                </p>
                {skill.description.map((element) => (
                  <p>
                    <TimelineDot
                      variant="outlined"
                      className="flex  m-2 float-left"
                    />
                    <p className="m-1">{element}</p>
                  </p>
                ))}
              </div>
            </Grid>
          ))}
        </Grid>
      </Grid>

      {/* Contact */}
     

      {/* Contact Info*/}
      
    </>
  );
};

export default Resume;
