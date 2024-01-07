// import React from 'react'
// import { DataObjectRounded } from '@mui/icons-material'
// import bgimg from '../assets/bgimg.jpg'
// import Logo from '../assets/Logo.mp4'
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

import db1 from '../assets/Proj-DBMS/i1.png'
import db2 from '../assets/Proj-DBMS/i2.png'
import db3 from '../assets/Proj-DBMS/i3.png'
import db4 from '../assets/Proj-DBMS/i4.png'
import db5 from '../assets/Proj-DBMS/i5.png'

import aud1 from '../assets/Proj-Audiobook/i1.png'
import aud2 from '../assets/Proj-Audiobook/i2.png'
import aud3 from '../assets/Proj-Audiobook/i3.png'
import aud4 from '../assets/Proj-Audiobook/i4.png'

import sign1 from '../assets/Proj-Sign/i1.png'
import sign2 from '../assets/Proj-Sign/i2.png'
import sign3 from '../assets/Proj-Sign/i3.png'
import sign4 from '../assets/Proj-Sign/i4.png'




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
            tag: "Internship",
            images : [aw1,aw2,aw3,aw4,aw5,aw6,aw7,aw8,aw9],
            title: "Somaiya Awards Management System ",
            caption: "Crafting seamless user experiences, from React magic to Node.js wizardry. Navigating databases like a boss and turning paper chaos into digital elegance. Project leader, design aficionado, and tech storyteller.",
            description: "Dove into this cool project where I aced React to make interfaces that are not just pretty but also super interactive. Behind the scenes, I went deep with Node.js to build a solid and efficient backend. Managed data like a champ using MySQL. Spruced up the design game using Figma for those eye-catching interfaces. But it's not just about the tech stuff - rocked the project management side, guiding the team through the whole ride. Explored the nitty-gritty of awards ceremonies and tackled the headache of paper workflows. Got better at talking tech too, delivering updates and demos like a pro. Stepped into a leadership role, supporting the team to crush it and make the project a success!",
            links : ['https://somaiyaawards.somaiya.edu/'],
            videos: null
        
    },

    project3: {
        
        tag: "Personal",
        images : [aud1,aud2,aud3,aud4],
        title: "AudiBook Generator",
        caption: "Turning Pages into Play: 📚✨ Crafted an Audiobook Converter that transforms the written word into an enchanting symphony. Your stories, now on the go — because every chapter deserves a voice! 🎙️🔮 #AudiobookWizard #LiteraryMagic",
        description: "Set off on a magical literary adventure to use the audiobook converter. This coding magic transforms stories from printed words into an engrossing auditory symphony. This project uses Python's pyttsx3 and pypdf2 extensively to convert text to speech, so your beloved stories will be read aloud with emotion. The easy GUI, powered by Tkinter, encourages you to simply convert any OCR PDF into an audiobook. What we have here is not just code, but the embodiment of literary magic. 📖✨🎧",
        links : ['https://youtu.be/Hrw8k90BiuQ'],
        videos: null
    
},
    

    project4: {
        
            tag: "Personal",
            images : [sign1,sign2,sign3,sign4],
            title: "Sign Language Converter",
            caption: "Breaking communication barriers, the project employs neural networks to recognize finger-spelling based American Sign Language in real-time. CNN method dives into the intriguing realm of human hand gesture recognition from camera images by filtering and classifying hand gestures.",
            description: "In a world where spoken language isn't an option for communication-related disabilities, American Sign Language takes center stage. This non-verbal form of communication involves hand gestures and visual expressions. Our project focuses on recognizing finger-spelling-based hand gestures, bridging the communication gap for the deaf and mute. Scope Beneficial for both the deaf/mute and those unfamiliar with sign language, this system interprets sign language gestures, providing output in both text and speech formats. Ease of communication is enhanced, allowing meaningful interactions between individuals regardless of sign language knowledge. In addition, our system extends its capabilities to Youtube videos, providing an inclusive experience by converting captions into live sign language gestures. Future collaborations with Youtube and Google envision avatars translating captions into dynamic gestures.",
            links : ['https://youtu.be/uEwaGspfxTE'],
            videos: null

        
    },
    
    project5: {
        
        tag: "Internship",
        images : [db1,db2,db3,db4,db5],
        title: "Database Management System using Python",
        caption: "Unleashing the Power of Data: Built a kickin' Database Management System that turns CRUD operations into a breeze through a sleek and intuitive UI. Your data, your rules — because managing databases should be as cool as your favorite playlist! 🎸💻 #DataMagic #UIWizardry",
        description: "The Project focused on developing the integration of MySQL database with a Python application, mastering data storage, retrieval, and administration. Proficient in CRUD operations, I assured seamless data manipulation and designed a user-friendly UI for better accessibility. Implemented rigorous data validation algorithms for correct user input and excelled in error handling, assuring program stability. Adept in project planning and cooperation, I respected user feedback to enhance app functionality. Skilled in achieving performance standards, and obtained great insights into business data management needs, helping considerably to operational efficiency. #Database #Python",
        links : [''],
        videos: null

},
}
