import React from "react";
import Header from "../components/Header";
import { Tabs, Tab, Card, CardActionArea, CardMedia, CardContent, Typography, Grow } from "@mui/material";
import { Container, Grid } from "@material-ui/core";
import { useState } from "react";
import CustomTabs from "../components/CustomTabs";
import resumeData from "../utils/resumeData";
import { useLocation } from "react-router";
import CustomCards from "../components/CustomCards";
import portfolioData from "../data/portfolioData";
import GalleryModal from "../components/ImgGallery";

const Portfolio = () => {
  // const { tabValue, setTabValue } = useState("All");

  const pathName = useLocation().pathname;
  return (
    // <Grid container>
    // <Grid
    //   item
    //   className=" text-yellow-300 cursor-auto animate-bounce inline-block relative "
    // >
    //   <h3 className="relative border-b-8 border-yellow-200 mb-7 mt-7 whitespace-pre-line">
    //     My Portfolio
    //   </h3>
    // </Grid>

    // <Grid container>
    // <Grid item>
    //       <Tabs value={tabValue} textColor="inherit" indicatorColor="yellow" onChange={(event, newValue) => setTabValue(newValue)}>
    //         <Tab value="All" Label='All' className={tabValue==='All' ? "text-white" : "text-blue-600"}/>
    //         {/* <Tab value="All" label='All' textColor="primary"/>  */}
    //       </Tabs>
    //       adncnkjn
    //       <Header/>

    // </Grid>
    // </Grid>

    // </Grid>

    <Grid container>
      {/* <Grid item xs={12}>
        <CustomTabs />
      </Grid> */}

      <Grid
            item
            className=" text-yellow-300 cursor-auto animate-bounce inline-block relative "
          >
            <h3 className="relative border-b-8 border-yellow-200 mb-7 mt-7 whitespace-pre-line">
              My Projects
            </h3>
          </Grid>

      <Grid item xs={12}>
        <Grid container spacing={3} className="mt-2 justify-around mb-4">
          {/* {resumeData.projects.map(proj =>(
                      
              <Grid item>
              <Grow in timeout={1000}>
              <Card onClick={() => console.log("Card clicked")}>
                <CardActionArea>
                  <CardMedia className="" image={proj.images['bgimg']} title={proj.title}/>
                  <CardContent>
                    <Typography>{proj.title}</Typography>
                    <Typography>{proj.description}</Typography>
                    <Typography>Learn More</Typography>

                  </CardContent>
                </CardActionArea>
              </Card>
              <CustomCards tag='skjdcsdkjcdsnkjcna' images={proj.}/>
              </Grow>
            </Grid>        
            
          ))}

        </Grid> */}
        <Grid item xs={12} sm={6} md={6}>
        {/* <CustomCards tag={portfolioData.project1.tag} title={portfolioData.project1.title} description={portfolioData.project1.description} images={portfolioData.project1.images}/> */}
          <GalleryModal projectTitle={portfolioData.project1.title} projectVideos={portfolioData.project1.videos} projectImages={portfolioData.project1.images} projectDescription={portfolioData.project1.description} demoLink={portfolioData.project1.links[0]} />

        </Grid>
        <Grid item>
        {/* <CustomCards tag={portfolioData.project2.tag} title={portfolioData.project2.title} description={portfolioData.project2.description} images={portfolioData.project2.images}/> */}
        <GalleryModal projectTitle={portfolioData.project2.title} projectVideos={portfolioData.project2.videos} projectImages={portfolioData.project2.images} projectDescription={portfolioData.project2.description} demoLink={portfolioData.project2.links[0]} />
        </Grid>
        <Grid item>
        {/* <CustomCards tag={portfolioData.project3.tag} title={portfolioData.project3.title} description={portfolioData.project3.description} images={portfolioData.project3.images}/> */}
        <GalleryModal projectTitle={portfolioData.project3.title} projectVideos={portfolioData.project3.videos} projectImages={portfolioData.project3.images} projectDescription={portfolioData.project3.description} demoLink={portfolioData.project3.links[0]} />

        </Grid>
        <Grid item>
          {/* <CustomCards tag={portfolioData.project4.tag} title={portfolioData.project4.title} description={portfolioData.project4.description} images={portfolioData.project4.images}/> */}
          <GalleryModal projectTitle={portfolioData.project4.title} projectVideos={portfolioData.project4.videos} projectImages={portfolioData.project4.images} projectDescription={portfolioData.project4.description} demoLink={portfolioData.project4.links[0]} />

        </Grid>
      </Grid>
    </Grid>
    </Grid>
  );
};

export default Portfolio;
