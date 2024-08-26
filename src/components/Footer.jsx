import React from "react";

const Footer = () => {
  return (
    <>
      <footer class="border-t">
        <div class="mx-auto grid max-w-screen-xl gap-y-8 gap-x-12 px-4 py-10 sm:px-20 md:grid-cols-2 xl:grid-cols-4 xl:px-10">
          <div class="max-w-sm">
            <div class="mb-6 flex h-10 items-center space-x-2">
              <span className="mr-2 text-4xl text-lime-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  width="1em"
                  height="1em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M6.925 16.875Q5.2 16.225 4.1 14.713Q3 13.2 3 11.25q0-1.975.938-3.513Q4.875 6.2 6 5.15q1.125-1.05 2.062-1.6L9 3v2.475q0 .625.45 1.062q.45.438 1.075.438q.35 0 .65-.15q.3-.15.5-.425L12 6q.95.55 1.625 1.35t1.025 1.8l-1.675 1.675q-.05-.6-.287-1.175q-.238-.575-.638-1.05q-.35.2-.738.287q-.387.088-.787.088q-1.1 0-1.987-.612Q7.65 7.75 7.25 6.725q-.95.925-1.6 2.062Q5 9.925 5 11.25q0 .775.275 1.462q.275.688.75 1.213q.05-.5.287-.938q.238-.437.588-.787L9 10.1l2.15 2.1q.05.05.1.125t.1.125l-1.425 1.425q-.05-.075-.087-.125q-.038-.05-.088-.1L9 12.925l-.7.7q-.125.125-.212.287q-.088.163-.088.363q0 .3.175.537q.175.238.45.363ZM9 10.1Zm0 0ZM7.4 22L6 20.6L19.6 7L21 8.4L17.4 12H21v2h-5.6l-.5.5l1.5 1.5H21v2h-2.6l2.1 2.1l-1.4 1.4l-2.1-2.1V22h-2v-4.6l-1.5-1.5l-.5.5V22h-2v-3.6Z"
                  />
                </svg>
              </span>
              <span class="text-2xl; font-medium">Creatorinn</span>
            </div>
            <div class="text-gray-500">
              At Cognitive Creations, we blend creativity with technology to
              deliver custom digital solutions. From app and website development
              to strategic marketing, we craft experiences that elevate your
              brand and drive results.
            </div>
          </div>
          <div class="">
            <div class="mt-4 mb-2 font-medium xl:mb-4">Guides</div>
            <nav aria-label="Guides Navigation" class="text-gray-500">
              <ul class="space-y-3">
                <li>
                  <a class="hover:text-blue-600 hover:underline" href="#">
                    How to make a footer
                  </a>
                </li>
                <li>
                  <a class="hover:text-blue-600 hover:underline" href="#">
                    Designing your app
                  </a>
                </li>
                <li>
                  <a class="hover:text-blue-600 hover:underline" href="#">
                    Getting help from the community
                  </a>
                </li>
                <li>
                  <a class="hover:text-blue-600 hover:underline" href="#">
                    Pricing vs Hourly Rate
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div class="">
            <div class="mt-4 mb-2 font-medium xl:mb-4">Links</div>
            <nav aria-label="Footer Navigation" class="text-gray-500">
              <ul class="space-y-3">
                <li>
                  <a class="hover:text-blue-600 hover:underline" href="#">
                    Pricing
                  </a>
                </li>
                <li>
                  <a class="hover:text-blue-600 hover:underline" href="#">
                    Demo
                  </a>
                </li>
                <li>
                  <a class="hover:text-blue-600 hover:underline" href="#">
                    Press
                  </a>
                </li>
                <li>
                  <a class="hover:text-blue-600 hover:underline" href="#">
                    Support Hub
                  </a>
                </li>
                <li>
                  <a class="hover:text-blue-600 hover:underline" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div class="">
            <div class="mt-4 mb-2 font-medium xl:mb-4">
              Support Us on Product Hunt
            </div>
            <div class="flex flex-col">
              <div class="mb-4">
                <a
                  href="https://www.producthunt.com/products/Apple?utm_source=badge-follow&utm_medium=badge&utm_souce=badge-Apple"
                  target="_blank"
                >
                  <img
                    src="https://api.producthunt.com/widgets/embed-image/v1/follow.svg?post_id=100070&theme=light"
                    //alt="Apple - Think&#0032;Different | Product Hunt"
                    //style={width: 250px; height: 54px}
                    width="250"
                    height="54"
                  />
                </a>
                <br />
                <a
                  href="https://www.producthunt.com/products/Apple?utm_source=badge-follow&utm_medium=badge&utm_souce=badge-Apple"
                  target="_blank"
                >
                  <img
                    src="https://api.producthunt.com/widgets/embed-image/v1/follow.svg?post_id=100070&theme=light"
                    //alt="Apple - Think&#0032;Different | Product Hunt"
                    //style={width: 250px; height: 54px}
                    width="250"
                    height="54"
                  />
                </a>
                <br />
              </div>
            </div>
          </div>
        </div>
        <div class="border-t">
          <div class="mx-auto flex max-w-screen-xl flex-col gap-y-4 px-4 py-3 text-center text-gray-500 sm:px-20 lg:flex-row lg:justify-between lg:text-left xl:px-10">
            <p class="">© 2024 Creatorinn | All Rights Reserved</p>
            <p class="-order-1 sm:order-none">Made with ❤️ By Creatorinn</p>
            <p class="">
              <a class="" href="#">
                Privacy Policy
              </a>
              <span> | </span>
              <a class="" href="#">
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
