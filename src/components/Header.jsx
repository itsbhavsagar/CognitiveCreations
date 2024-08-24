import React from "react";
import HeaderImage from "../assets/images/mb.png";

const Header = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,400;0,600;0,900&display=swap"
        rel="stylesheet"
      />

      <div className=" max-h-screen w-screen font-sans mt-10 pt-6 sm:pt-32 md:pt-10">
        {/* Background Image with Blur */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: `url(${HeaderImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(8px)", // Adjust the blur amount here
            zIndex: -10,
          }}
        />
        <div className="relative mx-auto flex flex-col px-4 sm:max-w-xl md:max-w-screen-xl md:flex-row">
          <div className="relative flex flex-col my-auto w-full max-w-xl lg:max-w-screen-xl">
            <div className="mb-16 lg:my-auto lg:max-w-lg">
              <div className="mb-6 max-w-xl">
                <div>
                  <p className="bg-teal-accent-400 mb-2 inline-block rounded-full bg-lime-300 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-900">
                    Creatorinn Digital Agency
                  </p>
                </div>
                <h2 className=" mb-6 max-w-lg text-3xl font-extrabold text-slate-700 sm:text-5xl sm:leading-snug">
                  You Are Offline <br />
                  Unlock Your Digital
                  <br />
                  <span className="bg-gradient-to-r inline-block from-lime-400 to-sky-400 px-2 font-bold text-white">
                    PRESENCE
                  </span>
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                  Find Out How Our Scale, Scope And Knowledge Allow Us To Help
                  Build Capabilities And Leadership At Every Level And
                  Opportunity.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 sm:space-y-0 sm:space-x-4 sm:flex-row">
                <a
                  href="/"
                  className="bg-sky-400 inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-lime-400 to-sky-400 px-8 font-medium tracking-wide text-white shadow-lg shadow-sky-300 outline-none transition duration-200 hover:scale-110 hover:bg-sky-500 focus:ring"
                >
                  Get started
                </a>
                <a
                  href="/"
                  className="inline-flex items-center font-semibold text-sky-400 transition-colors duration-200 hover:text-lime-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Watch Videos
                </a>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col space-y-3 overflow-hidden md:space-y-0 md:space-x-3 md:flex-row">
            <div className="hidden w-56 items-center space-y-3 lg:flex">
              <div className="overflow-hidden rounded-xl bg-yellow-400">
                <img
                  className="h-full w-full object-cover"
                  src={HeaderImage}
                  alt="header Image"
                />
              </div>
            </div>
            <div className="w-full flex-col space-y-3 rounded-xl py-4 lg:flex lg:w-80">
              <div className="h-40 overflow-hidden rounded-xl bg-green-600/60">
                <img
                  className="mx-auto h-full w-full object-cover"
                  src="https://cdn3d.iconscout.com/3d/premium/thumb/digital-marketing-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--analytics-logo-business-growth-illustrations-2426540.png?f=webp"
                  alt=""
                />
              </div>
              <div className="h-40 overflow-hidden rounded-xl bg-pink-600/60">
                <img
                  className="mx-auto h-full w-full object-cover"
                  src="https://img.freepik.com/free-psd/3d-rendering-recruitment-sales-background_23-2151323337.jpg?size=626&ext=jpg&ga=GA1.1.44546679.1716940800&semt=ais_user"
                  alt=""
                />
              </div>
              <div className="h-40 overflow-hidden rounded-xl bg-blue-600/60">
                <img
                  className="mx-auto h-full w-full object-cover"
                  src="https://static.vecteezy.com/system/resources/previews/011/019/587/original/social-media-and-digital-marketing-3d-illustration-png.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
