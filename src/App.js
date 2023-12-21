import React from "react";

import "./App.css";
import BasicInfo from "./pages/BasicInfo";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../src/components/Footer";
import Navbar from "../src/components/Navbar";
import Timeline from "./components/Timeline";
import Header from "./components/Header";

import { Container, Grid } from "@material-ui/core";
// import mypic from "../assets/mypic.jpg";
import backgroundImage from "../src/assets/bgimg_edited.png";
// import CustomTimeline, {
//   CustomTimelineSeparator,
// } from "../components/Timeline";
// import resumeData from "../utils/resumeData";
// import PersonIcon from "@mui/icons-material/Person";
// import TimelineItem from "@mui/lab/TimelineItem";
// import TimelineContent from "@mui/lab/TimelineContent";
// import DownloadIcon from "@mui/icons-material/DownloadRounded"
// import Header from "../components/Header";
import Profile from "../src/components/Profile";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

function App() {
  return (
    <div
      className="bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Container className="">
        <Grid container className="pt-3 pb-3">
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={3}
            className="shadow-3xl rounded-3xl backdrop-blur-sm backdrop-brightness-150"
          >
            <Profile />
          </Grid>

          <Grid
            item
            xs
            className="shadow-2xl p-4 rounded-3xl backdrop-blur-sm backdrop-brightness-150"
          >
            <BrowserRouter>
              <Header />

              <div className="bg-black bg-opacity-25 rounded-3xl mt-4 mb-4 p-4 text-white min-h-screen">
                <Routes>
                  <Route index element={<Resume />} />
                  <Route path="/timeline" element={<Timeline />} />
                  <Route path="/portfolio" element={<Portfolio />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
                
              </div>
              <Footer />
            </BrowserRouter>
          </Grid>

          <Grid container></Grid>
          {/* <Navbar /> */}
        </Grid>
      </Container>
    </div>
  );
}

export default App;

// import { Container, Grid } from "@material-ui/core";

// import Profile from "./components/Profile";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Portfolio from "./pages/Portfolio";
// import Resume from "./pages/Resume";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// function App() {
//   return (
//     <Container>
//       <Grid container>
//         <Grid
//         item
//         xs={12}
//         sm={12}
//         md={4}
//         lg={3}
//         >
//           <Profile />
//         </Grid>

//         <Grid item xs >
//         <Header/>
//         <Router>
//           <Routes>
//             <Route path="/portfolio">
//               <Portfolio />
//             </Route>
//             <Route path="/">
//               <Resume/>
//             </Route>
//           </Routes>
//         </Router>

//         <Footer/>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// }

// export default App;
