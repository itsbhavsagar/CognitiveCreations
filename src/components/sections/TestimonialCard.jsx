import React from 'react';

const TestimonialCard = ({ name, title, companyLogo, testimonial, image }) => {
  return (
    <div className="flex flex-col mb-6 bg-slate-50 rounded-lg p-6 shadow-lg w-96 flex-shrink-0 mx-4 my-2 transition-transform transform hover:scale-105 ">
      {/* Top Section: Image, Name, and Company Logo */}
      <div className="flex items-center mb-4">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover border-4 border-gray-200 mr-3 -mt-10"
        />
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h3 className="font-semibold text-xl text-gray-800">{name}</h3>
              <p className="text-gray-600 text-sm">{title}</p>
            </div>
            <img
              src={companyLogo}
              alt="company logo"
              className="w-14 h-14 object-contain -mt-5"
            />
          </div>
          <hr className="my-4 border-gray-300" />
        </div>
      </div>
      {/* Testimonial Text */}
      <p className="text-gray-700 text-base leading-relaxed">{testimonial}</p>
    </div>
  );
};

export default TestimonialCard;
