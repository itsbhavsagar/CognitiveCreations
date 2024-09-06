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
    name: 'Jitendra Chaudhary',
    title: 'Hotel Vistara Grand, Founder',
    companyLogo: 'https://www.hotelvistaragrand.com/img/logo.png',
    testimonial:
      'Working with Creatorinn was a game-changer for our promotional efforts. Their innovative strategies and expert execution significantly enhanced our online presence and brand appeal. We highly recommend their services for anyone looking to elevate their marketing.',
    image: 'https://randomuser.me/api/portraits/men/43.jpg',
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
  {
    name: 'Yash Sharma',
    title: 'Shyam Machine House, Founder',
    companyLogo:
      'https://5.imimg.com/data5/SELLER/Logo/2021/6/HE/UN/IZ/14503259/capture-120x120.PNG',
    testimonial:
      'Creatorinn has significantly streamlined our marketing efforts, leading to increased efficiency and better results for Shyam Machine House.',
    image: 'https://randomuser.me/api/portraits/men/86.jpg',
  },
];

// Duplicate the testimonials to ensure continuous scrolling
const testimonials = [...testimonialsTop, ...testimonialsTop];

const TestimonialList = () => {
  return (
    <>
      <h2 className="text-4xl font-sans font-bold text-center mb-6 text-gray-700 mt-5">
        See What People Are
        <br />
        Saying About Us
      </h2>
      <div className="overflow-hidden">
        <div className="flex animate-scroll-right space-x-6">
          {testimonials.map((testimonial, index) => (
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
    </>
  );
};

export default TestimonialList;
