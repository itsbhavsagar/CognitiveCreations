import React from "react";

const Header = () => {
  return (
    <>
      <div className=" max-h-screen w-screen font-sans -mt-10 pt-6 sm:pt-32 md:pt-10">
        <div className="mx-auto h-full px-4 py-28 md:py-28 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
          <div className="flex flex-col items-center justify-between lg:flex-row">
            <div className="">
              <div className="lg:max-w-xl lg:pr-5">
                <p className="flex text-sm uppercase text-orange-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-1 inline h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  An A.I marketing agency for high growth startups
                </p>

                <h2 className="mb-6 max-w-lg text-5xl font-thin leading-snug tracking-tight text-gray-600 sm:text-7xl sm:leading-snug">
                  We make you <br /> look{" "}
                  <span className="my-1 inline-block border-b-8 border-orange-400 bg-lime-300 px-4 font-bold text-gray-500">
                    different
                  </span>
                </h2>
                <p className="text-base text-gray-500">
                  We craft unique identities with AI-driven strategies that make
                  your startup stand out. Our tailored marketing solutions
                  ensure your brand gets noticed and thrives in a competitive
                  market.
                </p>
              </div>
              <div className="mt-10 flex flex-col items-center md:flex-row">
                {/* <a
                  href="/"
                  className="mb-3 inline-flex h-12 w-full items-center justify-center rounded bg-gradient-to-r from-green-400 to-blue-500 px-6 font-medium tracking-wide text-white shadow-md md:mr-4 md:mb-0 md:w-auto focus:outline-none hover:bg-blue-800 transition duration-200 hover:scale-110"
                >
                  Request A Quote{" "}
                </a> */}{" "}
                <a
                  href="#"
                  className="my-2 inline-flex cursor-pointer items-center rounded-full  bg-gradient-to-r from-green-400 to-blue-500 border-4 h-12 hover:translate-y-1 hover:shadow-lg hover:scale-105 shadow-md transition border-white  text-white py-3 font-b px-6  text-xl "
                >
                  Request a Quote{" "}
                </a>{" "}
                <a
                  href="/"
                  aria-label=""
                  className="group inline-flex items-center font-semibold text-gray-600 ml-3"
                >
                  {" "}
                  Watch how it works
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="group-hover:translate-x-2 ml-4 h-6 w-6 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="relative hidden h-full w-full items-center justify-center lg:flex lg:w-1/2">
              <div className="absolute z-1 lg:left-0">
                <div className="flex items-center rounded-md border border-gray-100 bg-white px-4 py-3 shadow-lg">
                  <img
                    className="h-10 w-10 rounded-full object-cover"
                    src="/images/oPf2b7fqx5xa3mo68dYHo.png"
                    alt="Simon Lewis"
                  />
                  <p className="ml-4 w-56">
                    <strong className="block text-lg font-medium">
                      Simon Lewis
                    </strong>
                    <span className="text-xs text-gray-400">
                      {" "}
                      Has been our client for 4 years{" "}
                    </span>
                  </p>
                </div>
                {/* SVG ICONS FOR LOOK  */}
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 -mt-8 -ml-20 hidden w-32 text-emerald-600/30 sm:block lg:-ml-28 lg:-mt-10 lg:w-32"
                >
                  <defs>
                    <pattern
                      id="2c67e949-4a23-49f7-bf27-ca140852cf21"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7"></circle>
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#2c67e949-4a23-49f7-bf27-ca140852cf21)"
                    width="52"
                    height="24"
                  ></rect>
                </svg>

                {/* SVG ICON FOR LOOK ENDS */}
                <div className="h-56 w-56 text-amber-600 absolute -z-10 left-20 top-20">
                  <svg
                    id="patternId"
                    width="100%"
                    height="100%"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <pattern
                        id="a"
                        patternUnits="userSpaceOnUse"
                        width="80px"
                        height="80px"
                        patternTransform="scale(1) rotate(0)"
                      >
                        <rect
                          x="0"
                          y="0"
                          width="100%"
                          height="100%"
                          fill="hsla(0,0%,100%,1)"
                        />
                        <path
                          d="M-20.133 4.568C-13.178 4.932-6.452 7.376 0 10c6.452 2.624 13.036 5.072 20 5 6.967-.072 13.56-2.341 20-5 6.44-2.659 13.033-4.928 20-5 6.964-.072 13.548 2.376 20 5s13.178 5.068 20.133 5.432"
                          strokeWidth="1"
                          stroke="hsla(258.5,59.4%,59.4%,1)"
                          fill="none"
                        />
                        <path
                          d="M-20.133 24.568C-13.178 24.932-6.452 27.376 0 30c6.452 2.624 13.036 5.072 20 5 6.967-.072 13.56-2.341 20-5 6.44-2.659 13.033-4.928 20-5 6.964-.072 13.548 2.376 20 5s13.178 5.068 20.133 5.432"
                          strokeWidth="1"
                          stroke="hsla(339.6,82.2%,51.6%,1)"
                          fill="none"
                        />
                        <path
                          d="M-20.133 44.568C-13.178 44.932-6.452 47.376 0 50c6.452 2.624 13.036 5.072 20 5 6.967-.072 13.56-2.341 20-5 6.44-2.659 13.033-4.928 20-5 6.964-.072 13.548 2.376 20 5s13.178 5.068 20.133 5.432"
                          strokeWidth="1"
                          stroke="hsla(198.7,97.6%,48.4%,1)"
                          fill="none"
                        />
                        <path
                          d="M-20.133 64.568C-13.178 64.932-6.452 67.376 0 70c6.452 2.624 13.036 5.072 20 5 6.967-.072 13.56-2.341 20-5 6.44-2.659 13.033-4.928 20-5 6.964-.072 13.548 2.376 20 5s13.178 5.068 20.133 5.432"
                          strokeWidth="1"
                          stroke="hsla(47,80.9%,61%,1)"
                          fill="none"
                        />
                      </pattern>
                    </defs>
                    <rect
                      width="800%"
                      height="800%"
                      transform="translate(-219,0)"
                      fill="url(#a)"
                    />
                  </svg>
                </div>
                <div className="mt-2 flex flex-col items-start rounded-md border border-gray-100 bg-white px-4 pt-3 pb-6 shadow-lg">
                  <strong className="block text-lg font-medium">
                    Site Analytics
                  </strong>
                  <div className="mt-4 flex items-center text-xs text-gray-400">
                    Impressions
                    <div className="ml-4 h-4 w-56 overflow-hidden rounded-md bg-gray-100">
                      <div className="h-full w-3/5 bg-yellow-200"></div>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center text-xs text-gray-400">
                    Engagement
                    <div className="ml-4 h-4 w-56 overflow-hidden rounded-md bg-gray-100">
                      <div className="h-full w-2/5 bg-gray-800"></div>
                    </div>
                  </div>
                </div>
              </div>

              <img
                className="-scale-x-100 mt-auto ml-96 h-4/6 object-cover lg:max-w-2xl"
                src="https://componentland.com/images/Rmq5nOvVkRXcJ4l-MnTfN.png"
                alt="glasses photo"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-4 py-12 bg-gray-100 -mt-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center transition-transform transform hover:scale-105">
            <div className="mb-4">
              <span className="text-6xl font-bold text-lime-500">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Improve Sales</h3>
            <p className="text-gray-600">
              Enhance your sales strategies to achieve better results and
              revenue.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center transition-transform transform hover:scale-105">
            <div className="mb-4">
              <span className="text-6xl font-bold text-orange-500">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Increase Userbase</h3>
            <p className="text-gray-600">
              Strategies and techniques to grow your user base and expand reach.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center transition-transform transform hover:scale-105">
            <div className="mb-4">
              <span className="text-6xl font-bold text-blue-500">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Never Regret</h3>
            <p className="text-gray-600">
              Solutions designed to ensure satisfaction and long-term success.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
