import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import ScrollToTop from './ScrollToTop'; // Import your ScrollToTop component

export default function App() {
  return (
    <>
      <ScrollToTop /> {/* Add ScrollToTop component here */}
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
