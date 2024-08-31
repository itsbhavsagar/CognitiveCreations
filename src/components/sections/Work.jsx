// src/components/Work.jsx

import React from "react";

const workProjects = [
  {
    id: 1,
    title: "Mobile App Development",
    description:
      "A cutting-edge mobile app designed for seamless user experiences and high performance.",
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400/cf2ce2205193507.66b64199aa265.jpg",
    video: "https://www.youtube.com/embed/YOqV1B4zY5E", // Dummy video URL
  },
  {
    id: 2,
    title: "Web Development",
    description:
      "A modern, responsive website built to enhance user engagement and drive conversions.",
    image: "https://via.placeholder.com/600x400?text=Web+Development",
    video: "https://www.youtube.com/embed/YOqV1B4zY5E", // Dummy video URL
  },
  {
    id: 3,
    title: "Web3 Solutions",
    description:
      "Innovative Web3 solutions leveraging blockchain technology to create decentralized applications.",
    image: "https://via.placeholder.com/600x400?text=Web3+Solutions",
    video: "https://www.youtube.com/embed/YOqV1B4zY5E", // Dummy video URL
  },
  {
    id: 4,
    title: "AI Marketing",
    description:
      "Advanced AI-driven marketing strategies to optimize campaign performance and ROI.",
    image: "https://via.placeholder.com/600x400?text=AI+Marketing",
    video: "https://www.youtube.com/embed/YOqV1B4zY5E", // Dummy video URL
  },
  {
    id: 5,
    title: "AI Digital Content",
    description:
      "High-quality digital content generated using AI to enhance user engagement and content creation.",
    image: "https://via.placeholder.com/600x400?text=AI+Digital+Content",
    video: "https://www.youtube.com/embed/YOqV1B4zY5E", // Dummy video URL
  },
  {
    id: 6,
    title: "Content Writing",
    description:
      "Professional content writing services for blogs, articles, and marketing materials.",
    image: "https://via.placeholder.com/600x400?text=Content+Writing",
    video: "https://www.youtube.com/embed/YOqV1B4zY5E", // Dummy video URL
  },
  {
    id: 7,
    title: "Instagram Ads",
    description:
      "Targeted Instagram ad campaigns designed to boost brand awareness and engagement.",
    image: "https://via.placeholder.com/600x400?text=Instagram+Ads",
    video: "https://www.youtube.com/embed/YOqV1B4zY5E", // Dummy video URL
  },
  {
    id: 8,
    title: "Facebook Ads",
    description:
      "Effective Facebook advertising strategies to drive traffic and increase conversions.",
    image: "https://via.placeholder.com/600x400?text=Facebook+Ads",
    video: "https://www.youtube.com/embed/YOqV1B4zY5E", // Dummy video URL
  },
];

const Work = () => {
  return (
    <div className="px-4 py-8 bg-gray-100 mt-20">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold mb-4 text-gray-800">Our Work</h1>
        <p className="text-lg text-gray-600">
          Explore some of the outstanding projects we've worked on.
        </p>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {workProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30"></div>
              <div className="absolute bottom-0 p-4 text-white bg-gradient-to-t from-black via-transparent to-transparent w-full">
                <h2 className="text-xl font-semibold">{project.title}</h2>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="relative pt-9/16">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={project.video}
                  title={`Video for ${project.title}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
