import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-gray-300">
        <div className="mx-auto grid max-w-screen-xl gap-y-12 gap-x-8 px-6 py-16 sm:px-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-6 flex items-center space-x-3">
              <span className="text-lime-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  width="2em"
                  height="2em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  {/* SVG Path */}
                  <path d="M6.925 16.875Q5.2 16.225 4.1 14.713Q3 13.2 3 11.25q0-1.975.938-3.513Q4.875 6.2 6 5.15q1.125-1.05 2.062-1.6L9 3v2.475q0 .625.45 1.062q.45.438 1.075.438q.35 0 .65-.15q.3-.15.5-.425L12 6q.95.55 1.625 1.35t1.025 1.8l-1.675 1.675q-.05-.6-.287-1.175q-.238-.575-.638-1.05q-.35.2-.738.287q-.387.088-.787.088q-1.1 0-1.987-.612Q7.65 7.75 7.25 6.725q-.95.925-1.6 2.062Q5 9.925 5 11.25q0 .775.275 1.462q.275.688.75 1.213q.05-.5.287-.938q.238-.437.588-.787L9 10.1l2.15 2.1q.05.05.1.125t.1.125l-1.425 1.425q-.05-.075-.087-.125q-.038-.05-.088-.1L9 12.925l-.7.7q-.125.125-.212.287q-.088.163-.088.363q0 .3.175.537q.175.238.45.363ZM9 10.1Zm0 0ZM7.4 22L6 20.6L19.6 7L21 8.4L17.4 12H21v2h-5.6l-.5.5l1.5 1.5H21v2h-2.6l2.1 2.1l-1.4 1.4l-2.1-2.1V22h-2v-4.6l-1.5-1.5l-.5.5V22h-2v-3.6Z" />
                </svg>
              </span>
              <span className="text-2xl font-bold text-white">Creatorinn</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              At Cognitive Creations, we blend creativity with technology to
              deliver custom digital solutions. From app and website development
              to strategic marketing, we craft experiences that elevate your
              brand and drive results.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Guides</h3>
            <nav className="text-gray-400">
              <ul className="space-y-3">
                <li>
                  <a className="hover:text-lime-400 transition-colors" href="#">
                    How to make a footer
                  </a>
                </li>
                <li>
                  <a className="hover:text-lime-400 transition-colors" href="#">
                    Designing your app
                  </a>
                </li>
                <li>
                  <a className="hover:text-lime-400 transition-colors" href="#">
                    Getting help from the community
                  </a>
                </li>
                <li>
                  <a className="hover:text-lime-400 transition-colors" href="#">
                    Pricing vs Hourly Rate
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Links</h3>
            <nav className="text-gray-400">
              <ul className="space-y-3">
                <li>
                  <a className="hover:text-lime-400 transition-colors" href="#">
                    Pricing
                  </a>
                </li>

                <li>
                  <a className="hover:text-lime-400 transition-colors" href="#">
                    Demo
                  </a>
                </li>
                <li>
                  <a className="hover:text-lime-400 transition-colors" href="#">
                    Press
                  </a>
                </li>
                <li>
                  <a className="hover:text-lime-400 transition-colors" href="#">
                    Support Hub
                  </a>
                </li>
                <li>
                  <a className="hover:text-lime-400 transition-colors" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Support Us
            </h3>
            <div className="flex flex-col">
              <a
                href="https://www.producthunt.com/products/Apple?utm_source=badge-follow&utm_medium=badge&utm_souce=badge-Apple"
                target="_blank"
                rel="noopener noreferrer"
                className="mb-4"
              >
                <img
                  src="https://api.producthunt.com/widgets/embed-image/v1/follow.svg?post_id=100070&theme=light"
                  alt="Support us on Product Hunt"
                  width="250"
                  height="54"
                  className="transition-transform hover:scale-105"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 py-6">
          <div className="mx-auto max-w-screen-xl px-6 text-center text-gray-400 sm:flex sm:justify-between">
            <p className="order-2 mt-4 sm:order-1 sm:mt-0">
              © 2024 Creatorinn | All Rights Reserved
            </p>
            <p className="order-1 sm:order-2">Made with ❤️ by Creatorinn</p>
            <p className="order-3 mt-4 sm:order-3 sm:mt-0">
              <a className="hover:text-lime-400 transition-colors" href="#">
                Privacy Policy
              </a>
              <span className="mx-2">|</span>
              <a className="hover:text-lime-400 transition-colors" href="#">
                Terms of Service
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
