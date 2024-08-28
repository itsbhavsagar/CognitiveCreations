import React from "react";

const Work = () => {
  return (
    <div>
      <section class="h-screen">
        <div class="relative mx-auto">
          <div class="absolute inset-0 bottom-56 bg-gradient-to-b from-indigo-700 via-blue-700 to-blue-600"></div>
          <div class="relative pt-20 mx-auto w-full max-w-screen-xl px-2 text-left sm:px-10">
            <div class="mx-auto flex flex-wrap space-x-3 py-4 text-sm sm:flex-row">
              {/* <a class="whitespace-no-wrap p-3 text-white">Projects</a>
              <a class="whitespace-no-wrap p-3 text-white opacity-50">
                Invoicing
              </a>
              <a class="whitespace-no-wrap p-3 text-white opacity-50">
                Proposals
              </a>
              <a class="whitespace-no-wrap p-3 text-white opacity-50">Forms</a>
              <a class="whitespace-no-wrap p-3 text-white opacity-50">
                Dashboards
              </a> */}
            </div>
            <div class="rounded-xl bg-white shadow-2xl shadow-blue-200 lg:flex">
              <div class="flex flex-col p-4 pb-6 sm:p-10 sm:pt-14 lg:w-2/5">
                <div class="flex-auto">
                  <h2 class="text-2xl font-black">
                    Keep Track of Your Projects from Start to Finish
                  </h2>
                  <p class="pt-4">
                    Create tasks, track time, share with colleagues, nd share
                    progress in real time.
                  </p>
                  <div class="mt-6 flex flex-wrap">
                    <p class="m-1 rounded-md text-gray-600 bg-gray-100 px-2 py-1 text-sm">
                      Reusable Boards
                    </p>
                    <p class="m-1 rounded-md text-gray-600 bg-gray-100 px-2 py-1 text-sm">
                      Multiple Views
                    </p>
                    <p class="m-1 rounded-md text-gray-600 bg-gray-100 px-2 py-1 text-sm">
                      Custom Fields
                    </p>
                    <p class="m-1 rounded-md text-gray-600 bg-gray-100 px-2 py-1 text-sm">
                      Multi Boards
                    </p>
                    <p class="m-1 rounded-md text-gray-600 bg-gray-100 px-2 py-1 text-sm">
                      Custom Butler
                    </p>
                  </div>
                </div>
              </div>
              <div class="m-8 lg:w-3/5 hidden overflow-hidden rounded-xl sm:block">
                <img
                  class="object-cover w-full h-full"
                  src="https://componentland.com/images/wDb1qtQu3xqsOUetV3Gzc.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;
