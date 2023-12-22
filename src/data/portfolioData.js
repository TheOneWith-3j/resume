import React from 'react'
import { DataObjectRounded } from '@mui/icons-material'
import bgimg from '../assets/bgimg.jpg'
import Logo from '../assets/Logo.mp4'
import res1 from '../assets/Proj-Resume/res-1.png'
import res2 from '../assets/Proj-Resume/res-2.png'
import res3 from '../assets/Proj-Resume/res-3.png'
import res4 from '../assets/Proj-Resume/res-4.png'
import res5 from '../assets/Proj-Resume/res-5.png'


import aw1 from '../assets/Proj-Awards/aw1.png'
import aw2 from '../assets/Proj-Awards/aw2.png'
import aw3 from '../assets/Proj-Awards/aw3.png'
import aw4 from '../assets/Proj-Awards/aw4.png'
import aw5 from '../assets/Proj-Awards/aw5.jpg'
import aw6 from '../assets/Proj-Awards/aw6.jpg'
import aw7 from '../assets/Proj-Awards/aw7.jpg'
import aw8 from '../assets/Proj-Awards/aw8.jpg'
import aw9 from '../assets/Proj-Awards/aw-9.jpg'





export default{
    project1: {
        
            tag: "Personal",
            images : [res1,res2,res3,res4,res5],
            title: "My Resume Website",
            caption: "Crafted a stunning and responsive resume website with React and Node.js, blending creativity with seamless functionality for a powerful online presence.",
            description: "Developed a dynamic resume website leveraging React for the frontend and Node.js for the backend, ensuring a seamless and responsive user experience. Employed a tech stack that included JavaScript, Tailwind, CSS, and Bootstrap, as well as other frameworks, to enhance impact and visual appeal. The website showcases a modern design, efficient navigation, and responsiveness, presenting a compelling and professional online presence.",
            links : ["https://theonewith-3j.github.io/resume/"],
                // {link:"https://theonewith-3j.github.io/resume/", icon: <DataObjectRounded/>}, 
                // {link:"ajbcjcbadsjcbnasjc", icon: <DataObjectRounded/>}, 
                // {link:"ajbcjcbadsjcbnasjc", icon: <DataObjectRounded/>}],
            videos: null
        
    },

    project2: 
        {
            tag: "React",
            images : [aw1,aw2,aw3,aw4,aw5,aw6,aw7,aw8,aw9],
            title: "Somaiya Awards Management System ",
            caption: "Crafting seamless user experiences, from React magic to Node.js wizardry. Navigating databases like a boss and turning paper chaos into digital elegance. Project leader, design aficionado, and tech storyteller.",
            description: "Dove into this cool project where I aced React to make interfaces that are not just pretty but also super interactive. Behind the scenes, I went deep with Node.js to build a solid and efficient backend. Managed data like a champ using MySQL. Spruced up the design game using Figma for those eye-catching interfaces. But it's not just about the tech stuff - rocked the project management side, guiding the team through the whole ride. Explored the nitty-gritty of awards ceremonies and tackled the headache of paper workflows. Got better at talking tech too, delivering updates and demos like a pro. Stepped into a leadership role, supporting the team to crush it and make the project a success!",
            links : ['']
        
    },


    project3: {
        
            tag: "Personal",
            images : ["image 1", "imag-2"],
            title: "proj3",
            caption: "",
            description: "amnccnsdmncd,asmcn,ds",
            links : [
                {link:"ajbcjcbadsjcbnasjc", icon: <DataObjectRounded/>}, 
                {link:"ajbcjcbadsjcbnasjc", icon: <DataObjectRounded/>}, 
                {link:"ajbcjcbadsjcbnasjc", icon: <DataObjectRounded/>}]
        
    },

    project4: {
        
            tag: "Personal",
            images : ["image 1", "imag-2"],
            title: "proj4",
            caption: "",
            description: "amnccnsdmncd,asmcn,ds",
            links : [
                {link:"ajbcjcbadsjcbnasjc", icon: <DataObjectRounded/>}, 
                {link:"ajbcjcbadsjcbnasjc", icon: <DataObjectRounded/>}, 
                {link:"ajbcjcbadsjcbnasjc", icon: <DataObjectRounded/>}]
        
    }
}
