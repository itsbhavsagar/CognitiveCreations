import React, { useState, useRef } from 'react';
import FormPopup from '../ui/FormPopup'; // Adjust the path as needed
import Notification from '../ui/Notification'; // Ensure you have this component
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [notification, setNotification] = useState(null);
  const checkboxRef = useRef(null); // Reference to the checkbox

  const handleFormOpen = () => {
    setIsFormOpen(true);
  };

  const handleFormClose = () => {
    setIsFormOpen(false);
  };

  // Function to handle notifications
  const handleNotification = (message, type) => {
    setNotification({ message, type });
    // Optionally, auto-hide the notification after a certain time
    setTimeout(() => {
      setNotification(null);
    }, 3000); // Hide after 3 seconds
  };

  // Function to close the menu
  const closeMenu = () => {
    if (checkboxRef.current) {
      checkboxRef.current.checked = false;
    }
  };

  return (
    <>
      <header className=" bg-white text-slate-700 w-screen fixed top-0 z-10 mx-auto flex flex-col overflow-hidden px-4 py-4 lg:flex-row lg:items-center shadow-md">
        <Link
          to={'/'}
          href="#"
          className="flex items-center whitespace-nowrap text-2xl font-black"
          onClick={closeMenu} // Close menu on link click
        >
          <span className="mr-2 text-4xl text-lime-600">
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
          Creatorinn
        </Link>
        <input
          ref={checkboxRef}
          type="checkbox"
          className="peer hidden"
          id="navbar-open"
        />
        <label
          className="absolute top-5 right-5 cursor-pointer lg:hidden"
          htmlFor="navbar-open"
        >
          <svg
            className="h-7 w-7"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
        <nav
          aria-label="Header Navigation "
          className="peer-checked:pt-8 peer-checked:max-h-60 flex max-h-0 w-full flex-col items-center overflow-hidden transition-all lg:ml-24 lg:max-h-full lg:flex-row"
        >
          <ul className="flex w-full flex-col items-center space-y-2 lg:flex-row lg:justify-center lg:space-y-0">
            <li className="lg:mr-12">
              <Link
                to={'/services'}
                className="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2  hover:text-lime-600 font-semibold"
                onClick={closeMenu} // Close menu on link click
              >
                Services
              </Link>
            </li>
            <li className="lg:mr-12">
              <Link
                to={'/projects'}
                className="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2 hover:text-lime-600 font-semibold"
                onClick={closeMenu} // Close menu on link click
              >
                Projects
              </Link>
            </li>
            <li className="lg:mr-12">
              <Link
                to={'/'}
                className="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2 hover:text-lime-600 font-semibold"
                onClick={closeMenu} // Close menu on link click
              >
                Team
              </Link>
            </li>
            <li className="lg:mr-12">
              <Link
                to={'/contact'}
                className="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2 hover:text-lime-600 font-semibold"
                onClick={closeMenu} // Close menu on link click
              >
                Contact
              </Link>
            </li>
          </ul>
          <hr className="mt-4 w-full lg:hidden" />
          <div className="my-4 flex items-center space-x-6 space-y-2 lg:my-0 lg:ml-auto lg:space-x-8 lg:space-y-0">
            <button
              onClick={handleFormOpen}
              className="whitespace-nowrap rounded bg-blue-700 px-5 py-3 font-medium text-white focus:outline-none"
            >
              Book free consultation
            </button>
          </div>
        </nav>
      </header>
      <FormPopup
        isOpen={isFormOpen}
        onClose={handleFormClose}
        onNotification={handleNotification}
      />
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)} // Allow manual dismissal
        />
      )}
    </>
  );
};

export default Navbar;
