import React from 'react';
import {
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaTwitter,
  FaFacebook,
} from 'react-icons/fa';

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
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="..." />
                </svg>
              </span>
              <span className="text-2xl font-bold text-white">Creatorinn</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              At Creatorinn, we blend creativity with technology to deliver
              custom digital solutions, helping brands grow their online
              presence.
            </p>
            <div className="mt-4 flex space-x-6">
              <a
                href="https://www.instagram.com"
                className="hover:text-pink-500"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://www.linkedin.com"
                className="hover:text-blue-400"
              >
                <FaLinkedin size={24} />
              </a>
              <a href="https://www.youtube.com" className="hover:text-red-600">
                <FaYoutube size={24} />
              </a>
              <a href="https://www.twitter.com" className="hover:text-blue-400">
                <FaTwitter size={24} />
              </a>
              <a
                href="https://www.facebook.com"
                className="hover:text-blue-600"
              >
                <FaFacebook size={24} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Company</h3>
            <nav className="text-gray-400">
              <ul className="space-y-3">
                <li>
                  <a
                    className="hover:text-lime-400 transition-colors"
                    href="/about-us"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-lime-400 transition-colors"
                    href="/careers"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-lime-400 transition-colors"
                    href="/team"
                  >
                    Meet the Team
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-lime-400 transition-colors"
                    href="/blog"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-lime-400 transition-colors"
                    href="/case-studies"
                  >
                    Case Studies
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Services</h3>
            <nav className="text-gray-400">
              <ul className="space-y-3">
                <li>
                  <a
                    className="hover:text-lime-400 transition-colors"
                    href="/seo-services"
                  >
                    SEO Services
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-lime-400 transition-colors"
                    href="/content-marketing"
                  >
                    Content Marketing
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-lime-400 transition-colors"
                    href="/ppc-advertising"
                  >
                    PPC Advertising
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-lime-400 transition-colors"
                    href="/social-media-management"
                  >
                    Social Media Management
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-lime-400 transition-colors"
                    href="/email-marketing"
                  >
                    Email Marketing
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Resources</h3>
            <nav className="text-gray-400">
              <ul className="space-y-3">
                <li>
                  <a
                    className="hover:text-lime-400 transition-colors"
                    href="/resources/guides"
                  >
                    Guides & Tutorials
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-lime-400 transition-colors"
                    href="/resources/webinars"
                  >
                    Webinars
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-lime-400 transition-colors"
                    href="/resources/ebooks"
                  >
                    eBooks
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-lime-400 transition-colors"
                    href="/resources/white-papers"
                  >
                    White Papers
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-lime-400 transition-colors"
                    href="/newsletter"
                  >
                    Newsletter
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="text-center -mt-10 mb-5 py-2">
          <a
            href="/contact-us"
            className="inline-block bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white py-3 px-6 rounded-full text-lg font-semibold shadow-lg transition-transform transform hover:scale-105"
          >
            Contact Us
          </a>
        </div>

        <div className="border-t border-gray-700 py-6">
          <div className="mx-auto max-w-screen-xl px-6 text-center text-gray-400 sm:flex sm:justify-between">
            <p className="order-2 mt-4 sm:order-1 sm:mt-0">
              © 2024 Creatorinn | All Rights Reserved
            </p>
            <p className="order-1 sm:order-2">
              Made with ❤️ in 🇮🇳 by Creatorinn
            </p>
            <p className="order-3 mt-4 sm:order-3 sm:mt-0">
              <a
                className="hover:text-lime-400 transition-colors"
                href="/privacy-policy"
              >
                Privacy Policy
              </a>
              <span className="mx-2">|</span>
              <a
                className="hover:text-lime-400 transition-colors"
                href="/terms-of-service"
              >
                Terms of Service
              </a>
              <span className="mx-2">|</span>
              <a
                className="hover:text-lime-400 transition-colors"
                href="/sitemap"
              >
                Sitemap
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
