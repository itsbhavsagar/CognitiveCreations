import React from "react";

const Header = () => {
  return (
    <>
      <div className=" max-h-screen w-screen font-sans -mt-10 pt-6 sm:pt-32 md:pt-10">
        <div class="mx-auto h-full px-4 py-28 md:py-40 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
          <div class="flex flex-col items-center justify-between lg:flex-row">
            <div class="">
              <div class="lg:max-w-xl lg:pr-5">
                <p class="flex text-sm uppercase text-lime-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="mr-1 inline h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  An agency for high growth startups
                </p>

                <h2 class="mb-6 max-w-lg text-5xl font-thin leading-snug tracking-tight text-gray-600 sm:text-7xl sm:leading-snug">
                  We make you <br /> look{" "}
                  <span class="my-1 inline-block border-b-8 border-orange-400 bg-lime-300 px-4 font-bold text-gray-500">
                    different
                  </span>
                </h2>
                <p class="text-base text-gray-500">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque it.
                </p>
              </div>
              <div class="mt-10 flex flex-col items-center md:flex-row">
                <a
                  href="/"
                  class="mb-3 inline-flex h-12 w-full items-center justify-center rounded bg-gradient-to-r from-lime-400 to-sky-400 px-6 font-medium tracking-wide text-white shadow-md md:mr-4 md:mb-0 md:w-auto focus:outline-none hover:bg-blue-800 transition duration-200 hover:scale-110"
                >
                  Request A Quote{" "}
                </a>
                <a
                  href="/"
                  aria-label=""
                  class="group inline-flex items-center font-semibold text-gray-600"
                >
                  Watch how it works
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="group-hover:translate-x-2 ml-4 h-6 w-6 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div class="relative hidden h-full w-full items-center justify-center lg:flex lg:w-1/2">
              <div class="absolute z-1 lg:left-0">
                <div class="flex items-center rounded-md border border-gray-100 bg-white px-4 py-3 shadow-lg">
                  <img
                    class="h-10 w-10 rounded-full object-cover"
                    src="/images/oPf2b7fqx5xa3mo68dYHo.png"
                    alt="Simon Lewis"
                  />
                  <p class="ml-4 w-56">
                    <strong class="block text-lg font-medium">
                      Simon Lewis
                    </strong>
                    <span class="text-xs text-gray-400">
                      {" "}
                      Has been our client for 4 years{" "}
                    </span>
                  </p>
                </div>
                {/* SVG ICONS FOR LOOK  */}
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  class="absolute top-0 left-0 z-0 -mt-8 -ml-20 hidden w-32 text-emerald-600/30 sm:block lg:-ml-28 lg:-mt-10 lg:w-32"
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
                <div class="mt-2 flex flex-col items-start rounded-md border border-gray-100 bg-white px-4 pt-3 pb-6 shadow-lg">
                  <strong class="block text-lg font-medium">
                    Site Analytics
                  </strong>
                  <div class="mt-4 flex items-center text-xs text-gray-400">
                    Impressions
                    <div class="ml-4 h-4 w-56 overflow-hidden rounded-md bg-gray-100">
                      <div class="h-full w-3/5 bg-yellow-200"></div>
                    </div>
                  </div>

                  <div class="mt-4 flex items-center text-xs text-gray-400">
                    Engagement
                    <div class="ml-4 h-4 w-56 overflow-hidden rounded-md bg-gray-100">
                      <div class="h-full w-2/5 bg-gray-800"></div>
                    </div>
                  </div>
                </div>
              </div>

              <img
                class="-scale-x-100 mt-auto ml-96 h-4/6 object-cover lg:max-w-2xl"
                src="https://componentland.com/images/Rmq5nOvVkRXcJ4l-MnTfN.png"
                alt="glasses photo"
              />
            </div>
          </div>
          <div class="w-fit mx-auto mt-16 mb-16 flex flex-col justify-center divide-y divide-gray-300 bg-white text-gray-500 shadow-lg sm:flex-row sm:items-center sm:divide-x sm:divide-y-0 md:mt-20">
            <div class="flex max-w-xs items-center space-x-2 px-4 py-4">
              <span class="text-5xl font-black text-lime-400">1</span>
              <p>Improve Sales</p>
            </div>
            <div class="flex max-w-xs items-center space-x-2 px-4 py-4">
              <span class="text-5xl font-black text-orange-600">2</span>
              <p>Increase Userbase</p>
            </div>
            <div class="flex max-w-xs items-center space-x-2 px-4 py-4">
              <span class="text-5xl font-black text-blue-600">3</span>
              <p>Never Regret</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
