// import React from 'react';
// import TestimonialCard from './TestimonialCard';

// // Dynamically import all logos
// const logos = import.meta.glob('/src/assets/images/partner_logos/*.png', {
//   eager: true,
// });

// // Log the loaded logos to verify the paths
// console.log('Loaded Logos:', logos);

// // Function to get logo by name
// const getLogo = (logoFileName) => {
//   const logoKey = `/src/assets/images/partner_logos/${logoFileName}`;
//   console.log('Looking for logo:', logoKey);
//   return logos[logoKey]?.default || logos[logoKey]; // Check both default and direct module
// };

// const testimonialsTop = [
//   {
//     name: 'Amit Sharma',
//     title: 'CEO',
//     companyLogo: 'bmw.png',
//     testimonial:
//       'Our collaboration with Creatorinn has been a game-changer for our outreach strategies.',
//     image: 'https://randomuser.me/api/portraits/men/1.jpg',
//   },
//   {
//     name: 'Yash Sharma',
//     title: 'Founder, CEO',
//     companyLogo:
//       'https://5.imimg.com/data5/SELLER/Logo/2021/6/HE/UN/IZ/14503259/capture-120x120.PNG',
//     testimonial:
//       'Creatorinn has helped us streamline our marketing efforts significantly.',
//     image: 'https://randomuser.me/api/portraits/women/2.jpg',
//   },
//   {
//     name: 'Ravi Kumar',
//     title: 'Chief Operations Officer',
//     companyLogo: 'expedia.png',
//     testimonial:
//       'The efficiency brought by Creatorinn is unparalleled in our industry.',
//     image: 'https://randomuser.me/api/portraits/men/3.jpg',
//   },
//   {
//     name: 'John Smith',
//     title: 'Head of Marketing',
//     companyLogo: 'hsbc.png',
//     testimonial:
//       'Creatorinn has provided us with invaluable insights and tools.',
//     image: 'https://randomuser.me/api/portraits/men/4.jpg',
//   },
//   {
//     name: 'Sara Johnson',
//     title: 'Director of Sales',
//     companyLogo: 'ibm.png',
//     testimonial:
//       "Our sales strategies have greatly benefited from Creatorinn's data.",
//     image: 'https://randomuser.me/api/portraits/women/5.jpg',
//   },
//   {
//     name: 'Michael Davis',
//     title: 'CEO',
//     companyLogo: 'trinity-logo.png',
//     testimonial: 'An excellent platform that has streamlined our operations.',
//     image: 'https://randomuser.me/api/portraits/men/6.jpg',
//   },
//   {
//     name: 'Priya Reddy',
//     title: 'Head of Sales',
//     companyLogo: 'bharat-electronics-logo.png',
//     testimonial:
//       "Creatorinn's platform has greatly enhanced our customer engagement.",
//     image: 'https://randomuser.me/api/portraits/women/7.jpg',
//   },
//   {
//     name: 'Rajesh Singh',
//     title: 'VP of Marketing',
//     companyLogo: 'piramal-logo.png',
//     testimonial:
//       'A fantastic tool that has elevated our marketing campaigns to new heights.',
//     image: 'https://randomuser.me/api/portraits/men/8.jpg',
//   },
//   {
//     name: 'Jessica Lee',
//     title: 'Product Development Manager',
//     companyLogo: 'sungrow-logo.png',
//     testimonial:
//       "Creatorinn's analytics have provided us with the edge we needed.",
//     image: 'https://randomuser.me/api/portraits/women/9.jpg',
//   },
//   {
//     name: 'Daniel Anderson',
//     title: 'Operations Director',
//     companyLogo: 'green-energy-logo.png',
//     testimonial: 'An indispensable tool for optimizing our operations.',
//     image: 'https://randomuser.me/api/portraits/men/10.jpg',
//   },
// ];

// const testimonialsBottom = [
//   {
//     name: 'Emily Brown',
//     title: 'Marketing Lead',
//     companyLogo: 'solarworld-logo.png',
//     testimonial:
//       "Creatorinn's user-friendly interface has been a huge asset to our team.",
//     image: 'https://randomuser.me/api/portraits/women/11.jpg',
//   },
//   {
//     name: 'David Wilson',
//     title: 'VP of Operations',
//     companyLogo: 'nextenergy-logo.png',
//     testimonial: 'Our operational efficiency has seen a marked improvement.',
//     image: 'https://randomuser.me/api/portraits/men/12.jpg',
//   },
//   {
//     name: 'Natalie Martinez',
//     title: 'Business Development Lead',
//     companyLogo: 'enercon-logo.png',
//     testimonial:
//       'Creatorinn has been crucial in enhancing our business strategies.',
//     image: 'https://randomuser.me/api/portraits/women/13.jpg',
//   },
//   {
//     name: 'Arjun Mehta',
//     title: 'Head of Digital Strategy',
//     companyLogo: 'jsw-logo.png',
//     testimonial:
//       'The real-time data provided by Creatorinn has transformed our approach.',
//     image: 'https://randomuser.me/api/portraits/men/14.jpg',
//   },
//   {
//     name: 'Sonia Gupta',
//     title: 'Product Manager',
//     companyLogo: 'hdfc-logo.png',
//     testimonial:
//       "Creatorinn's insights have been crucial in driving our strategic decisions.",
//     image: 'https://randomuser.me/api/portraits/women/15.jpg',
//   },
//   {
//     name: 'Arjun Mehta',
//     title: 'Head of Digital Strategy',
//     companyLogo: 'jsw-logo.png',
//     testimonial:
//       'The real-time data provided by Creatorinn has transformed our approach.',
//     image: 'https://randomuser.me/api/portraits/men/16.jpg',
//   },
//   {
//     name: 'Sandeep Kapoor',
//     title: 'Chief Financial Officer',
//     companyLogo: 'adani-logo.png',
//     testimonial:
//       "Creatorinn's platform is a game-changer for financial management.",
//     image: 'https://randomuser.me/api/portraits/men/17.jpg',
//   },
//   {
//     name: 'Ananya Verma',
//     title: 'Senior Marketing Analyst',
//     companyLogo: 'jsw-energy-logo.png',
//     testimonial:
//       "We've seen a significant improvement in our marketing ROI with Creatorinn.",
//     image: 'https://randomuser.me/api/portraits/women/18.jpg',
//   },
//   {
//     name: 'Thomas Miller',
//     title: 'Chief Strategy Officer',
//     companyLogo: 'shelby-logo.png',
//     testimonial:
//       "The strategic insights we've gained from Creatorinn are invaluable.",
//     image: 'https://randomuser.me/api/portraits/men/19.jpg',
//   },
//   {
//     name: 'Sophia Garcia',
//     title: 'Senior Manager',
//     companyLogo: 'meridian-logo.png',
//     testimonial:
//       'Creatorinn has transformed the way we approach market analysis.',
//     image: 'https://randomuser.me/api/portraits/women/20.jpg',
//   },
// ];

// const TestimonialList = () => {
//   return (
//     <>
//       <h2 className="text-4xl font-sans font-bold text-center mb-6 text-gray-700 mt-5">
//         See What People Are Saying About Us
//       </h2>
//       <div className="space-y-10 m-5">
//         {/* Top Row Scrolling Right to Left */}
//         <div className="overflow-hidden">
//           <div className="flex animate-scroll-left space-x-6">
//             {testimonialsTop.map((testimonial, index) => (
//               <TestimonialCard
//                 key={index}
//                 name={testimonial.name}
//                 title={testimonial.title}
//                 companyLogo={getLogo(testimonial.companyLogo)}
//                 testimonial={testimonial.testimonial}
//                 image={testimonial.image}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Bottom Row Scrolling Left to Right */}
//         <div className="overflow-hidden">
//           <div className="flex animate-scroll-right space-x-6">
//             {testimonialsBottom.map((testimonial, index) => (
//               <TestimonialCard
//                 key={index}
//                 name={testimonial.name}
//                 title={testimonial.title}
//                 companyLogo={getLogo(testimonial.companyLogo)}
//                 testimonial={testimonial.testimonial}
//                 image={testimonial.image}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default TestimonialList;

import React from 'react';
import TestimonialCard from './TestimonialCard';

// Testimonial data with online company logo URLs
const testimonialsTop = [
  {
    name: 'Vivek Jindal',
    title: 'Bhuvik Light House, Founder',
    companyLogo: 'https://catalog.wlimg.com/1/12663913/other-images/988204.jpg',
    testimonial:
      'Creatorinn has transformed our outreach strategies, providing innovative solutions that have driven significant growth for Bhuvik Light House.',
    image: 'https://randomuser.me/api/portraits/men/22.jpg',
  },
  {
    name: 'Ankush Bhandari',
    title: 'UpEducators, Founder',
    companyLogo:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlEuM5TRixyl9o63tJdGnvFvOUuMsdDmHT-fCeHpzJ7O0c79R9I4LJJtuG_-UP8i5Jmaw&usqp=CAU',
    testimonial:
      'UpEducators has seen remarkable improvements in engagement and outreach thanks to Creatorinn’s tailored marketing strategies.',
    image:
      'https://www.upeducators.com/wp-content/uploads/2021/11/64YgLYfliOiZ2Lsir1Kf423mG4lSsRXG3UwL0f52C9sTesNYwsdWtUyTOOhN-595xh.jpg',
  },
  {
    name: 'Yash Sharma',
    title: 'Shyam Machine House, Founder',
    companyLogo:
      'https://5.imimg.com/data5/SELLER/Logo/2021/6/HE/UN/IZ/14503259/capture-120x120.PNG',
    testimonial:
      'Creatorinn has significantly streamlined our marketing efforts, leading to increased efficiency and better results for Shyam Machine House.',
    image: 'https://randomuser.me/api/portraits/men/86.jpg',
  },
  {
    name: 'Rampal Kushawah',
    title: 'Indus Footwear, CEO',
    companyLogo:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkqV_1eQ_w226Nn2CpuudhaRdLCzaUTK1m7A&s',
    testimonial:
      'The support and innovative strategies from Creatorinn have been pivotal in enhancing Indus Footwear’s market presence and growth.',
    image: 'https://randomuser.me/api/portraits/men/13.jpg',
  },

  // Add more testimonials as needed
];

// const testimonialsBottom = [
//   {
//     name: 'Emily Brown',
//     title: 'Marketing Lead',
//     companyLogo: 'https://example.com/logos/solarworld.png', // Use your actual logo URL
//     testimonial:
//       "Creatorinn's user-friendly interface has been a huge asset to our team.",
//     image: 'https://randomuser.me/api/portraits/women/11.jpg',
//   },
//   {
//     name: 'David Wilson',
//     title: 'VP of Operations',
//     companyLogo: 'https://example.com/logos/nextenergy.png', // Use your actual logo URL
//     testimonial: 'Our operational efficiency has seen a marked improvement.',
//     image: 'https://randomuser.me/api/portraits/men/12.jpg',
//   },
//   // Add more testimonials as needed
// ];

const TestimonialList = () => {
  return (
    <>
      <h2 className="text-4xl font-sans font-bold text-center mb-6 text-gray-700 mt-5">
        See What People Are Saying About Us
      </h2>
      <div className="space-y-10 m-5">
        {/* Top Row Scrolling Right to Left */}
        <div className="overflow-hidden">
          <div className="flex animate-scroll-left space-x-6">
            {testimonialsTop.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                title={testimonial.title}
                companyLogo={testimonial.companyLogo}
                testimonial={testimonial.testimonial}
                image={testimonial.image}
              />
            ))}
          </div>
        </div>

        {/* Bottom Row Scrolling Left to Right */}
        {/* <div className="overflow-hidden">
          <div className="flex animate-scroll-right space-x-6">
            {testimonialsBottom.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                title={testimonial.title}
                companyLogo={testimonial.companyLogo}
                testimonial={testimonial.testimonial}
                image={testimonial.image}
              />
            ))}
          </div>
        </div> */}
      </div>
    </>
  );
};

export default TestimonialList;
