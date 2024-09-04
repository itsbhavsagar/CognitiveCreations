// // src/components/Services.jsx

// import React from "react";

// const services = [
//   {
//     id: 1,
//     title: "SEO Optimization",
//     description:
//       "Improve your website’s visibility on search engines and attract more organic traffic.",
//     icon: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/6ab936189130685.65a6e82209dec.jpg",
//   },
//   {
//     id: 2,
//     title: "Social Media Management",
//     description:
//       "Boost your brand’s presence on social media platforms with effective strategies and content.",
//     icon: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/c9d9eb166653723.641bcd767c422.png",
//   },
//   {
//     id: 3,
//     title: "Content Marketing",
//     description:
//       "Engage your audience with high-quality content tailored to your target market.",
//     icon: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/c78a85195324807.660be16ac892a.jpg",
//   },
//   {
//     id: 4,
//     title: "Pay-Per-Click Advertising",
//     description:
//       "Drive targeted traffic to your site through strategic PPC campaigns and ad management.",
//     icon: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/4c59b1148472523.62d66a75d8b5e.png",
//   },
//   {
//     id: 5,
//     title: "Mobile App Development",
//     description:
//       "Create high-performance mobile applications tailored to your business needs.",
//     icon: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/58bda5170467947.645e383f56dff.jpg",
//   },
//   {
//     id: 6,
//     title: "Web Development",
//     description:
//       "Design and develop custom websites that are responsive, user-friendly, and optimized for performance.",
//     icon: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/3fc66c177208431.651ae075d385a.jpg",
//   },
//   {
//     id: 7,
//     title: "Web3 Services",
//     description:
//       "Leverage the power of blockchain technology for decentralized applications and smart contracts.",
//     icon: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/4f31ec197228077.662cb07b7be82.jpg",
//   },
//   {
//     id: 8,
//     title: "AI Marketing",
//     description:
//       "Utilize artificial intelligence to optimize marketing strategies and enhance customer engagement.",
//     icon: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/1912e1194355135.65fac33dcaf0a.png",
//   },
//   {
//     id: 9,
//     title: "AI Digital Content",
//     description:
//       "Generate and optimize digital content using advanced AI tools to drive better results.",
//     icon: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/ea419b191059881.65c4d26dc55e2.png",
//   },
//   {
//     id: 10,
//     title: "Content Writing",
//     description:
//       "Craft compelling and engaging content tailored to your audience and business goals.",
//     icon: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/a2c902141834431.625bdacb7ae0b.png",
//   },
//   {
//     id: 11,
//     title: "Instagram Ads",
//     description:
//       "Create targeted Instagram ad campaigns to boost your brand’s visibility and engagement.",
//     icon: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/42eb34119166171.609828d3b8ac3.png",
//   },
//   {
//     id: 12,
//     title: "Facebook Ads",
//     description:
//       "Drive traffic and increase conversions with well-targeted Facebook advertising campaigns.",
//     icon: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/d346b7108424351.5fbd61c13c3fd.jpg",
//   },
//   // Add more services as needed
// ];

// const Services = () => {
//   return (
//     <div className="px-4 py-8 bg-gray-100 mt-20">
//       <header className="text-center mb-12">
//         <h1 className="text-3xl font-bold mb-4 text-gray-800">Our Services</h1>
//         <p className="text-lg text-gray-600">
//           Explore our extensive range of services designed to drive your
//           business growth.
//         </p>
//       </header>
//       <div className="flex flex-wrap gap-8 justify-center">
//         {services.map((service) => (
//           <div
//             key={service.id}
//             className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl w-full sm:w-80 "
//           >
//             <img
//               src={service.icon}
//               alt={service.title}
//               className="w-full h-48 object-cover transition-transform transform hover:scale-110"
//             />
//             <div className="p-6">
//               <h2 className="text-xl font-semibold mb-2 text-gray-800">
//                 {service.title}
//               </h2>
//               <p className="text-gray-700">{service.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="text-center mt-12">
//         <p className="text-lg mb-4 text-gray-800">
//           Ready to take your digital marketing to the next level?
//         </p>
//         <button className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition">
//           Contact Us
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Services;

// src/components/Services.jsx

import React from "react";

const services = [
  {
    id: 1,
    title: "SEO Optimization",
    description:
      "Improve your website’s visibility on search engines and attract more organic traffic.",
    icon: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/6ab936189130685.65a6e82209dec.jpg",
  },
  {
    id: 2,
    title: "Social Media Management",
    description:
      "Boost your brand’s presence on social media platforms with effective strategies and content.",
    icon: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/c9d9eb166653723.641bcd767c422.png",
  },
  {
    id: 3,
    title: "Content Marketing",
    description:
      "Engage your audience with high-quality content tailored to your target market.",
    icon: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/c78a85195324807.660be16ac892a.jpg",
  },
  {
    id: 4,
    title: "Pay-Per-Click Advertising",
    description:
      "Drive targeted traffic to your site through strategic PPC campaigns and ad management.",
    icon: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/4c59b1148472523.62d66a75d8b5e.png",
  },
  {
    id: 5,
    title: "Mobile App Development",
    description:
      "Create high-performance mobile applications tailored to your business needs.",
    icon: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/58bda5170467947.645e383f56dff.jpg",
  },
  {
    id: 6,
    title: "Web Development",
    description:
      "Design and develop custom websites that are responsive, user-friendly, and optimized for performance.",
    icon: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/3fc66c177208431.651ae075d385a.jpg",
  },
  {
    id: 7,
    title: "Web3 Services",
    description:
      "Leverage the power of blockchain technology for decentralized applications and smart contracts.",
    icon: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/4f31ec197228077.662cb07b7be82.jpg",
  },
  {
    id: 8,
    title: "AI Marketing",
    description:
      "Utilize artificial intelligence to optimize marketing strategies and enhance customer engagement.",
    icon: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/1912e1194355135.65fac33dcaf0a.png",
  },
  {
    id: 9,
    title: "AI Digital Content",
    description:
      "Generate and optimize digital content using advanced AI tools to drive better results.",
    icon: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/ea419b191059881.65c4d26dc55e2.png",
  },
  {
    id: 10,
    title: "Content Writing",
    description:
      "Craft compelling and engaging content tailored to your audience and business goals.",
    icon: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/a2c902141834431.625bdacb7ae0b.png",
  },
  {
    id: 11,
    title: "Instagram Ads",
    description:
      "Create targeted Instagram ad campaigns to boost your brand’s visibility and engagement.",
    icon: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/42eb34119166171.609828d3b8ac3.png",
  },
  {
    id: 12,
    title: "Facebook Ads",
    description:
      "Drive traffic and increase conversions with well-targeted Facebook advertising campaigns.",
    icon: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/d346b7108424351.5fbd61c13c3fd.jpg",
  },
  // Add more services as needed
];

const Services = () => {
  return (
    <div className="px-4 py-8 bg-gray-100 mt-20">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-serif font-extrabold mb-4 text-gray-800">
          Our Services
        </h1>
        <p className="text-lg text-gray-600">
          Explore our extensive range of services designed to drive your
          business growth.
        </p>
      </header>
      <div className="flex flex-wrap gap-8 justify-center">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl w-full sm:w-80"
          >
            <img
              src={service.icon}
              alt={service.title}
              className="w-full h-48 object-cover transition-transform transform hover:scale-110"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">
                {service.title}
              </h2>
              <p className="text-gray-700">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <p className="text-lg mb-4 text-gray-800">
          Ready to take your digital marketing to the next level?
        </p>

        <button className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition">
          Contact Us
        </button>
      </div>
    </div>



  );
};

export default Services;
