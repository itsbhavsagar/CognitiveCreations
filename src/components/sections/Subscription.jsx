import React from "react";

const Subscription = () => {
  return (
    <section className="relative py-20 bg-gray-50 overflow-hidden">
      {/* Background Image */}
      <img
        className="pointer-events-none absolute bottom-0 left-0 z-10 opacity-[0.1] w-full h-full object-cover"
        src="https://cdn.pixabay.com/photo/2022/01/11/17/04/city-6931092_640.jpg"
        alt="Background"
      />

      <div className="container mx-auto flex flex-col px-4 lg:px-6 lg:flex-row items-center">
        {/* Left Column */}
        <div className="mb-12 lg:mb-0 lg:w-1/2 lg:pr-16 xl:pr-20">
          <h2 className="text-4xl font-extrabold text-gray-700 mb-6 font-serif">
            Elevate Your Brand with Cutting-Edge Marketing Solutions
          </h2>
          <p className="text-gray-700 mb-8 leading-relaxed">
            At Creatorinn, we specialize in transforming businesses with
            innovative digital marketing strategies. Our team leverages the
            latest technologies and trends to craft solutions that drive growth
            and engagement. Join the ranks of our successful partners and see
            how we can make an impact together.
          </p>
          <div>
            <p className="font-bold text-lime-500 text-lg">Founder</p>
            <p className="text-gray-500">Founder & CEO</p>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col lg:flex-row lg:w-1/2 gap-6">
          {/* Card 1 */}
          <div className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
            <img
              src="https://cdn.sanity.io/images/k0dlbavy/production/0a8b3a04db528994ac1f0a0f4a14ba4f97d87d21-1360x1360.png?w=1360&auto=format"
              alt="Our Approach"
              className="w-full h-48 object-contain"
            />
            <div className="p-6">
              <p className="mb-1 font-medium uppercase text-orange-500">
                Our Approach
              </p>
              <h5 className="text-gray-700 mb-4 font-semibold">
                Discover how our unique approach sets us apart from the rest.
                Our innovative methods drive results and deliver measurable
                success.
              </h5>
              <div className="mt-2 flex h-12 w-12 items-center justify-center rounded-full bg-lime-400 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
            <img
              src="https://i0.wp.com/i.pinimg.com/originals/90/5b/0f/905b0f2d9ee22e1fd2401c92a4f95755.jpg?resize=160,120"
              alt="Our Vision"
              className="w-full h-48 object-fit"
            />
            <div className="p-6">
              <p className="mb-1 font-medium uppercase text-orange-500">
                Our Vision
              </p>
              <h5 className="text-gray-700 mb-4 font-semibold">
                Explore our vision for the future of digital marketing. We are
                committed to leading the industry with creative solutions and
                strategic insights.
              </h5>
              <div className="mt-2 flex h-12 w-12 items-center justify-center rounded-full bg-lime-400 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscription;
