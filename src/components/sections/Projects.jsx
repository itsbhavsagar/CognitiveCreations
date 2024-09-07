import React from 'react';

const Projects = () => {
  return (
    <div>
      <div class="mx-auto my-10 w-screen max-w-screen-xl px-4">
        <div class="to flex items-center rounded-xl bg-gradient-to-r from-green-400 to-blue-500 px-8 text-white shadow-lg">
          <div class="my-10 lg:my-8 lg:w-1/2">
            <h1 class="text-2xl font-bold">
              Get Your Brand Seen by the Right People, in the Right Places
            </h1>
            <p class="mt-4 text-lg">
              We’re on a Mission to Make Your Brand Stand Out from the Crowd.
            </p>
            <button
              type="submit"
              class="group mt-4 mr-2 mb-4 flex cursor-pointer text-left text-xl font-semibold leading-tight text-white hover:text-blue-700 hover:transition-all"
            >
              Get a free quote
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="group-hover:ml-8 ml-4 h-7 w-7 transition-all"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>
          </div>
          <div class="hidden h-72 w-1/2 flex-shrink-0 justify-center lg:flex">
            <img
              class=""
              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2e53eb139149265.6265e20ba4765.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
