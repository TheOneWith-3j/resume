// // GalleryModal.js
// import React, { useState } from 'react';
// import Modal from 'react-modal';

// const GalleryModal = ({ projectTitle, projectImages, projectDescription, demoLink }) => {
//   const [modalIsOpen, setModalIsOpen] = useState(false);

//   return (
//     <div>
//       <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setModalIsOpen(true)}>
//         Open Gallery
//       </button>

//       <Modal
//         isOpen={modalIsOpen}
//         onRequestClose={() => setModalIsOpen(false)}
//         style={{
//           overlay: {
//             backgroundColor: 'rgba(0, 0, 0, 0.75)',
//           },
//           content: {
//             top: '50%',
//             left: '50%',
//             right: 'auto',
//             bottom: 'auto',
//             marginRight: '-50%',
//             transform: 'translate(-50%, -50%)',
//             maxWidth: '600px',
//           },
//         }}
//       >
//         <div className="text-right">
//           <button className="" onClick={() => setModalIsOpen(false)}>
//             Close
//           </button>
//         </div>

//         <h2 className="text-2xl font-bold mb-4">{projectTitle}</h2>

//         {/* Display images, thumbnails, navigation buttons, etc. here */}
//         {/* Use your own logic for the gallery */}
//         {projectImages.map((image, index) => (
//           <img key={index} src={image} alt={`Project Image ${index}`} className="w-full mb-4" />
//         ))}

//         <p className="text-gray-600 mb-4">{projectDescription}</p>

//         <a href={demoLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
//           View Project Demo
//         </a>
//       </Modal>
//     </div>
//   );
// };

// export default GalleryModal;









// GalleryModal.js
import React, { useState } from 'react';
import Modal from 'react-modal';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const GalleryModal = ({ projectTitle, projectImages, projectDescription, demoLink, projectVideos }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <button className="bg-yellow-100 hover:bg-yellow-300 py-2 px-4 rounded-2xl max-w-xs" onClick={() => setModalIsOpen(true)}>
      
            <div className='text-center p-2 text-black'>
                <p className='font-bold'>{projectTitle}</p>
                <img src={projectImages[0]} className=''></img>
                <p className='break-words mt-3'>{projectDescription}</p>
                <p className='mt-2 text-right text-blue-600 underline underline-offset-4'>Learn More</p>
            </div>
      
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
          },
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            maxWidth: '60%',
            maxHeight:'90%',
            padding: '30px'
          },
        }}
      >
        <div className="text-right">
          <button className="" onClick={() => setModalIsOpen(false)}>
            Close
          </button>
        </div>

        <h2 className="text-2xl font-bold mb-4">{projectTitle}</h2>

        <Slider {...settings} className='border-4 max-w-lg'>
          {projectImages.map((image, index) => (
            <img key={index} src={image} alt={`Project Image ${index}`} className="w-full" />
          ))}


          {projectVideos && projectVideos.map((video, index) => (
            <div key={index}>
              <video controls className="w-full max-w-xs block m-auto">
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              </div>
            ))}
          
        </Slider>

        

        <p className="text-gray-600 mb-4 mt-3 ">{projectDescription}</p>

        <a href={demoLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          View Project Demo
        </a>
      </Modal>
    </div>
  );
};

export default GalleryModal;







