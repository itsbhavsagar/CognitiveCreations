import React from "react";
import { ImYoutube2 } from "react-icons/im";
import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaGoogle,
} from "react-icons/fa";
const Services = () => {
  return (
    <>
      <section class="mx-auto px-6 text-gray-800 md:max-w-screen-xl">
        <div class="mx-auto mt-20 mb-16 block px-6 text-center">
          <h2 class="mx-auto  font-bold text-2xl lg:text-5xl ">
            Your
            <span className="md:text-4xl text-2xl lg:text-5xl mx-auto bg-sky-400a mr-6 ml-6 inline-flex h-16 items-center justify-center rounded-full bg-gradient-to-r from-lime-400 to-sky-400 px-8 font-medium tracking-wide text-white shadow-lg shadow-sky-300 outline-none transition duration-200 hover:scale-110 hover:bg-sky-500 focus:ring">
              {" "}
              Digital Future{" "}
            </span>
            is Here
          </h2>
          <div class="mx-auto mt-6 mb-auto block w-full text-xl font-normal leading-9 text-gray-700 md:w-3/4 xl:w-3/4">
            <p class="text-lg">
              At Cognitive Creations, we bridge the gap between vision and
              reality. Our expert team harnesses the power of cutting-edge
              technology, AI, and creative strategies to build digital solutions
              that propel your brand into the future. Whether it's innovative
              apps, dynamic websites, or impactful marketing campaigns, we're
              here to transform your ideas into tangible success.
            </p>
          </div>
          <div class="mt-8 text-center">
            <a
              class="mx-2 mb-2 inline-block rounded bg-blue-500 px-6 py-2 text-xl font-medium text-white shadow md:mx-4 md:mt-2 md:text-lg hover:scale-105 hover:shadow-md"
              href="#"
              target="_blank"
            >
              Get Started
            </a>
            <a
              class="mx-2 mb-2 inline-block rounded bg-lime-300  px-6 py-2 text-xl font-medium text-black shadow md:mx-4 md:mt-2 md:text-lg hover:scale-105 hover:shadow-md"
              href="#"
            >
              Book a Demo
            </a>
          </div>
        </div>

        <div class="grid gap-10 pb-20 sm:grid-cols-2 lg:grid-cols-3">
          <div class="rounded-md border border-gray-200 bg-white p-8 shadow-sm">
            <div class="my-4 flex items-center">
              <div className="mr-4 flex h-12 w-20 items-center justify-center rounded-lg border bg-red-600 text-4xl text-white">
                <ImYoutube2 />
              </div>

              <h3 class="text-2xl font-bold md:text-xl">YouTube</h3>
            </div>
            <p class="text-gray-700">
              At Cognitive Creations, we craft compelling video content that
              elevates your brand on YouTube. From concept to creation, we
              ensure your message resonates with the right audience and drives
              engagement. Let us handle the details while you watch your brand
              grow.
            </p>
          </div>
          <div class="rounded-md border border-gray-200 bg-white p-8 shadow-sm">
            <div class="my-4 flex items-center">
              <div className="mr-4 flex h-12 w-16 items-center justify-center rounded-lg border bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 text-4xl text-white">
                <FaInstagram />
              </div>

              <h3 class="text-2xl font-bold md:text-xl">Instagram</h3>
            </div>
            <p class="text-gray-700">
              At Cognitive Creations, we create content that captures attention
              and drives engagement. From stunning visuals to creative
              campaigns, we make sure your brand shines on Instagram. Let us
              handle the strategy while you connect with your audience.
            </p>
          </div>
          <div class="rounded-md border border-gray-200 bg-white p-8 shadow-sm">
            <div class="my-4 flex items-center">
              <div className="mr-4 flex h-12 w-16 items-center justify-center rounded-lg border bg-gradient-to-br from-blue-400 to-blue-600 text-4xl text-white">
                <FaTwitter />
              </div>

              <h3 class="text-2xl font-bold md:text-xl">Twitter</h3>
            </div>
            <p class="text-gray-700">
              At Cognitive Creations, we craft impactful tweets and engaging
              content that elevate your brand on Twitter. From trending hashtags
              to creative campaigns, we help you connect with your audience and
              drive meaningful conversations. Let us manage your Twitter
              presence while you focus on your business.
            </p>
          </div>
          <div class="rounded-md border border-gray-200 bg-white p-8 shadow-sm">
            <div class="my-4 flex items-center">
              <div className="mr-4 flex h-12 w-16 items-center justify-center rounded-lg border bg-gradient-to-br from-blue-600 to-blue-800 text-4xl text-white">
                <FaFacebook />
              </div>

              <h3 class="text-2xl font-bold md:text-xl">Facebook</h3>
            </div>
            <p class="text-gray-700">
              At Cognitive Creations, we help your brand connect with millions
              on Facebook. From targeted ads to engaging posts, we create
              content that boosts visibility and drives interaction. Let us
              manage your Facebook presence while you focus on growing your
              business.
            </p>
          </div>
          <div class="rounded-md border border-gray-200 bg-white p-8 shadow-sm">
            <div class="my-4 flex items-center">
              <div className="mr-4 flex h-12 w-16 items-center justify-center rounded-lg border bg-gradient-to-br from-blue-700 to-blue-900 text-4xl text-white">
                <FaLinkedin />
              </div>

              <h3 class="text-2xl font-bold md:text-xl">LinkedIn</h3>
            </div>
            <p class="text-gray-700">
              At Cognitive Creations, we enhance your brand’s professional image
              on LinkedIn. From strategic posts to targeted networking, we craft
              content that builds connections and drives business growth. Let us
              manage your LinkedIn strategy while you focus on your industry
              leadership.
            </p>
          </div>
          <div class="rounded-md border border-gray-200 bg-white p-8 shadow-sm">
            <div class="my-4 flex items-center">
              <div className="mr-4 flex h-12 w-16 items-center justify-center rounded-lg border bg-gradient-to-br from-blue-500 to-orange-500 text-4xl text-white">
                <FaGoogle />
              </div>

              <h3 class="text-2xl font-bold md:text-xl">Google My Business</h3>
            </div>
            <p class="text-gray-700">
              At Cognitive Creations, we optimize your Google My Business
              profile to boost local visibility and attract more customers. From
              managing reviews to enhancing your listing, we ensure your
              business stands out in local searches. Let us handle your Google
              My Business presence while you grow your customer base.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
