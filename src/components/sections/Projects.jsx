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
    ],
    video: 'https://www.youtube.com/embed/YOqV1B4zY5E',
  },
  {
    id: 2,
    title: 'Modern House Interior Design',
    description:
      'Explore our expertise in modern interior design, showcasing innovative layouts, stylish furnishings, and contemporary decor that bring residential spaces to life.',
    images: [
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400/aa9d26150578197.62fcca98c97ca.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400/649a8b150578197.62fcca98c49b4.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400/0bde5c150578197.62fcca98d0c4d.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400/7a13b6150578197.62fcca98c218b.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400/eb6e4e150578197.62fcca98d04be.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400/82161d150578197.62fcca98c2958.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400/ffbc31150578197.62fcca98c31fe.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400/6ddfef150578197.62fcca98cdc30.jpg',
    ],
    video: 'https://www.youtube.com/embed/aP1w5G0G2L8',
  },
];

// FUNCTIONALITY

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
              className="w-full h-48 object-fit"
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
