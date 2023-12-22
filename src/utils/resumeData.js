import React from 'react'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {solid,regular, brands , icon} from '@fortawesome/fontawesome-svg-core'
// import {fa-linkedin} from '@fortawesome/free-regular-svg-icons'
import GitHubIcon from "@material-ui/icons/GitHub"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import { StorageRounded, Web, WebRounded } from '@material-ui/icons'
import { DataObjectRounded } from '@mui/icons-material'
import bgimg from '../assets/bgimg.jpg'

export default{
    name:"Jash J. Joshi",
    designation: "Computer Engineer",
    dob : "15th January, 2002",
    email: "jashjoshi57@gmail.com",
    address: "Borivali (W), Mumbai-92, MH, India",

    social :{
        Linkedin : {
            link: "https://linkedin.com/in/jash-joshi01/",
            text: "LinkedIn Profile",
            icon : <LinkedInIcon/>
        },
        Github : {
            link:"https://github.com/TheOneWith-3j",
            text:"GitHub Profile",
            icon: <GitHubIcon/>
        }
    },
   
    about_me :"B. Tech in Computer Engineering. Well-versed in computer science foundations, including object-oriented programming, data structures, algorithms, and relational databases. Aninventive thinker and problem-solving enthusiast, harnessing technology to deliver effective solutions. A devoted team leader, managing collaborative efforts toward achievement, blending a perfectionist's eye for detail with a curiosity-driven approach to handle problems.",
   
    experiences: [
        {
            title:"Data Analyst",
            company: "Optrait Financial Solutions",
            date : "2023",
            description: ["Analyzed huge datasets using statistical approaches to find patterns and trends in stock market strategy. Ensured data accuracy through rigorous cleaning, transformation, and validation processes.", "Coordinated across teams to create data analysis objectives utilizing Agile approach and Jira Software."]
        },
        {
            title:"Python Programmer",
            company: "Cyberace Infovision Pvt. Ltd.",
            date : "2023",
            description: ["Utilized MySQL in conjunction with WampServer (WAMPP) for data storage, retrieval, and optimization. ", "Implemented functionality of CRUD operations, designed a user-friendly interface, and ensured data validations."]
        },
        {
            title:"Web Developer",
            company: "KJSIT, Mumbai, MH",
            date : "2021",
            description: ["Developed and deployed a departmental website utilizing HTML, CSS, JavaScript, PHP, and Bootstrap.", "Led front-end design for an appealing and user-friendly interface, coordinated with back-end engineers for smooth integration, secured crossdevice compatibility."]
        }
    ],

    education: [
        {
            title:"B.Tech in Computer Engineering",
            institute: "KJSIT, Sion",
            date : "2020 - 2024",
            score: "CGPA : 9.22"
        },

        {
            title:"Honours in Data Science",
            institute: "KJSIT, Sion",
            date : "2020 - 2024",
            score: "CGPA : 9.22"
        },

        {
            title:"Class 12th, HSC",
            institute: "Mithibai College (Science)",
            date : "2018 - 2020",
            score: "Percentage : 87.38%"
        },

        {
            title:"Class 10th, SSC",
            institute: "St. Francis D'Assisi High School",
            date : "2018",
            score: "Percentage - 95.40%"
        }
    ],

    services : [
        {
            title: "Web Development",
            description : "Generation of Dynamic and Responsive Websites",
            icon : <WebRounded/>
        },
        {
            title: "Data Analysis",
            description : "Provide insights over data to aid in critical decision-making",
            icon : <StorageRounded/>
        },
        {
            title: "Programming",
            description : "Devloping Softwares and Applications along with Maintainance and Testing",
            icon : <DataObjectRounded/>
        }
    ],

    skills : [
        {
            title: "Front-End",
            description : ["React", "JavaScript", "PHP"],
        },
        {
            title: "Backend",
            description : ["Python", "NodeJS", "SQL"],
        },
        {
            title: "Data Science",
            description : ["MySQL", "NumPy", "Pandas"],
        },
        
        {
            title: "AI-ML",
            description: ["Keras","TensorFlow", "Matplotlib and Seaborn"]
        },
        
        {
            title: "Source Control And Collaboration",
            description: ["Git / GitHub", "Google Colab", "MS Office"]
        },
        {
            title: "Frameworks",
            description: ["MUI", "Tailwind", "Bootstrap"]
        }
    ],

    projects:[
        {
            tag: "React",
            images : [bgimg, "imag-2"],
            title: "My Resume Website",
            caption: "",
            description: "ajdhhcchla",
            links : [
                {link:"ajbcjcbadsjcbnasjc", icon: <DataObjectRounded/>}, 
                {link:"ajbcjcbadsjcbnasjc", icon: <DataObjectRounded/>}, 
                {link:"ajbcjcbadsjcbnasjc", icon: <DataObjectRounded/>}]
        },

        {
            tag: "Personal",
            images : ["image 1", "imag-2"],
            title: "proj2",
            caption: "",
            description: "amnccnsdmncd,asmcn,ds",
            links : [
                {link:"ajbcjcbadsjcbnasjc", icon: <DataObjectRounded/>}, 
                {link:"ajbcjcbadsjcbnasjc", icon: <DataObjectRounded/>}, 
                {link:"ajbcjcbadsjcbnasjc", icon: <DataObjectRounded/>}]
        },

        {
            tag: "ML",
            images : ["image 1", "imag-2"],
            title: "",
            caption: "",
            description: "",
            links : [
                {link:"ajbcjcbadsjcbnasjc", icon: <DataObjectRounded/>}, 
                {link:"ajbcjcbadsjcbnasjc", icon: <DataObjectRounded/>}, 
                {link:"ajbcjcbadsjcbnasjc", icon: <DataObjectRounded/>}]
        },

        {
            tag: "Python",
            images : ["image 1", "imag-2"],
            title: "",
            caption: "",
            description: "",
            links : [
                {link:"ajbcjcbadsjcbnasjc", icon: <DataObjectRounded/>}, 
                {link:"ajbcjcbadsjcbnasjc", icon: <DataObjectRounded/>}, 
                {link:"ajbcjcbadsjcbnasjc", icon: <DataObjectRounded/>}]
        }
    ],




    proj:[
        {
            Tags :['React', 'Web DEv', 'python', "ML", 'Data Analysis'],
            imgs : [
                {
                    Tag1: [bgimg, "imag-2"],
                    Tag2: [bgimg, "imag-2"],
                    Tag3: [bgimg, "imag-2"]} ]
        }
        
    ]
    
}








// <FontAwesomeIcon icon="fa-brands fa-linkedin" fade size="xl" />