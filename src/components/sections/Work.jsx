// // src/components/Work.jsx

// import React from 'react';

// const workProjects = [
//   {
//     id: 1,
//     title: 'Luxury Residential Catalog',
//     description:
//       'Explore our luxury residential catalog, featuring stunning high-end properties with detailed presentations.',
//     image:
//       'https://mir-s3-cdn-cf.behance.net/project_modules/1400/773143206025883.66c5967a11ed9.jpg',
//     video: 'https://www.youtube.com/embed/YOqV1B4zY5E', // Dummy video URL
//   },
//   {
//     id: 2,
//     title: 'Modern Building Showcase',
//     description:
//       'A showcase of modern building designs, highlighting innovative architectural styles and features.',
//     image:
//       'https://mir-s3-cdn-cf.behance.net/project_modules/1400/745631206025883.66c5967704f71.jpg',
//     video: 'https://www.youtube.com/embed/YOqV1B4zY5E', // Dummy video URL
//   },
//   {
//     id: 3,
//     title: 'Architectural Elegance',
//     description:
//       'Catalog featuring elegant architectural designs, perfect for high-end real estate marketing.',
//     image:
//       'https://mir-s3-cdn-cf.behance.net/project_modules/1400/72b004206025883.66c59677054f9.jpg',
//     video: 'https://www.youtube.com/embed/YOqV1B4zY5E', // Dummy video URL
//   },
//   {
//     id: 4,
//     title: 'Urban Design Portfolio',
//     description:
//       'A detailed portfolio of urban design projects, showcasing innovative and practical building solutions.',
//     image:
//       'https://mir-s3-cdn-cf.behance.net/project_modules/1400/fa094f206025883.66c5967a149fa.jpg',
//     video: 'https://www.youtube.com/embed/YOqV1B4zY5E', // Dummy video URL
//   },
//   {
//     id: 5,
//     title: 'Contemporary Spaces',
//     description:
//       'Highlighting contemporary spaces with cutting-edge design and functionality.',
//     image:
//       'https://mir-s3-cdn-cf.behance.net/project_modules/1400/7470ca206025883.66c5967a1510a.jpg',
//     video: 'https://www.youtube.com/embed/YOqV1B4zY5E', // Dummy video URL
//   },
//   {
//     id: 6,
//     title: 'Elegant Interiors',
//     description:
//       'Showcasing elegant interior designs that blend sophistication with modernity.',
//     image:
//       'https://mir-s3-cdn-cf.behance.net/project_modules/1400/94cc26206025883.66c5967a12f21.jpg',
//     video: 'https://www.youtube.com/embed/YOqV1B4zY5E', // Dummy video URL
//   },
//   {
//     id: 7,
//     title: 'Innovative Facades',
//     description:
//       'A look at innovative building facades, emphasizing modern architectural aesthetics.',
//     image:
//       'https://mir-s3-cdn-cf.behance.net/project_modules/1400/f3c0c8206025883.66c5967a13904.jpg',
//     video: 'https://www.youtube.com/embed/YOqV1B4zY5E', // Dummy video URL
//   },
//   {
//     id: 8,
//     title: 'High-Rise Developments',
//     description:
//       'Featuring high-rise developments with a focus on urban living and high-quality design.',
//     image:
//       'https://mir-s3-cdn-cf.behance.net/project_modules/1400/8c658c206025883.66c5967a14096.jpg',
//     video: 'https://www.youtube.com/embed/YOqV1B4zY5E', // Dummy video URL
//   },
//   {
//     id: 9,
//     title: 'Luxury Penthouse Designs',
//     description:
//       'Exclusive penthouse designs that define luxury living with unparalleled views and amenities.',
//     image:
//       'https://mir-s3-cdn-cf.behance.net/project_modules/1400/0d9089206025883.66c5967a1274c.jpg',
//     video: 'https://www.youtube.com/embed/YOqV1B4zY5E', // Dummy video URL
//   },
//   {
//     id: 10,
//     title: 'Sustainable Building Solutions',
//     description:
//       'Innovative and sustainable building solutions that promote eco-friendly living.',
//     image:
//       'https://mir-s3-cdn-cf.behance.net/project_modules/1400/f1dff8206025883.66c5967a159c4.jpg',
//     video: 'https://www.youtube.com/embed/YOqV1B4zY5E', // Dummy video URL
//   },
// ];

// const Work = () => {
//   return (
//     <div className="px-4 py-8 bg-gray-900 mt-20">
//       <header className="text-center mb-12">
//         <h1 className="text-5xl font-bold text-white mb-4">Our Work</h1>
//         <p className="text-xl text-gray-300">
//           Discover our diverse portfolio, featuring exceptional design and
//           innovative solutions.
//         </p>
//       </header>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//         {workProjects.map((project) => (
//           <div
//             key={project.id}
//             className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl relative group"
//           >
//             <div className="relative">
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="w-full h-64 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
//               <div className="absolute bottom-0 p-4 text-white bg-gradient-to-t from-black via-transparent to-transparent w-full">
//                 <h2 className="text-lg font-semibold">{project.title}</h2>
//               </div>
//             </div>
//             <div className="p-4">
//               <p className="text-gray-800 mb-4">{project.description}</p>
//               <div className="relative pt-9/16">
//                 <iframe
//                   className="absolute top-0 left-0 w-full h-full"
//                   src={project.video}
//                   title={`Video for ${project.title}`}
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                 ></iframe>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Work;

// src/components/Work.jsx

import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const workProjects = [
  {
    id: 1,
    title: 'Luxury Residential Catalog',
    description:
      'Explore our luxury residential catalog, featuring stunning high-end properties with detailed presentations.',
    images: [
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400/773143206025883.66c5967a11ed9.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400/745631206025883.66c5967704f71.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400/72b004206025883.66c59677054f9.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400/fa094f206025883.66c5967a149fa.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400/7470ca206025883.66c5967a1510a.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400/94cc26206025883.66c5967a12f21.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400/f3c0c8206025883.66c5967a13904.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400/8c658c206025883.66c5967a14096.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400/0d9089206025883.66c5967a1274c.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400/f1dff8206025883.66c5967a159c4.jpg',
    ],
    video: 'https://www.youtube.com/embed/YOqV1B4zY5E', // Dummy video URL
  },
];

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const closeModal = () => setSelectedProject(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    appendArrows: <div className="custom-arrows" />, // Custom arrow container
  };

  return (
    <div className="px-4 py-8 bg-gray-900 mt-20">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold text-white mb-4">Our Work</h1>
        <p className="text-xl text-gray-300">
          Discover our diverse portfolio, featuring exceptional design and
          innovative solutions.
        </p>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {workProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105 hover:shadow-2xl"
            onClick={() => setSelectedProject(project)}
          >
            <img
              src={project.images[0]} // Show the first image as a preview
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{project.title}</h2>
              <p className="text-gray-800">{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full relative"
            onClick={(e) => e.stopPropagation()} // Prevent click event from closing modal
          >
            <div className="relative">
              <Slider {...settings} className="w-full h-96">
                {selectedProject.images.map((image, index) => (
                  <div key={index}>
                    <img
                      src={image}
                      alt={`${selectedProject.title} - Image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </Slider>
              <button
                className="absolute top-2 right-2 bg-gray-700 text-white p-2 rounded-full"
                onClick={closeModal}
              >
                X
              </button>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">
                {selectedProject.title}
              </h2>
              <p className="text-gray-800 mb-4">
                {selectedProject.description}
              </p>
              <div className="relative pt-9/16">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={selectedProject.video}
                  title={`Video for ${selectedProject.title}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Work;
