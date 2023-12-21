import React, { useState } from 'react';
import Modal from 'react-modal';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// const CustomCards = () => {
//   return (
//     <div className='container'>
//         <div className='bg-yellow-100 p-3 m-3'>
//             <div className='text-center p-2 text-black'>
//                 {resumeData.projects.map(proj =>(
//                         // console.log(proj.tag)
//                         <p>{proj}</p>
//                 ))}
//             </div>

//         </div>
      
//     </div>
//   )
// }



const CustomCards = ({ tag, children, images, title, caption, description, link }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  
  return (
      <div className="">
        <button onClick={() => setModalIsOpen(true)}>
        <div className='container'>
        <div className='bg-yellow-100 p-3 m-3 rounded-2xl '>
            <div className='text-center p-2 text-black'>
                <p>{title}</p>
                <img src={images[0]} className=''></img>
                <p className='break-words mt-3'>{description}</p>
                <p className='mt-2 text-right text-blue-600 underline underline-offset-4'>Learn More</p>
            </div>

        </div>
      
    </div>
        </button>
  
  
          {children}
          {/* Remaining Items */}
    </div>
    );
  };
  



export default CustomCards
