import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import { Outlet } from 'react-router-dom';
import ScrollToTop from './ScrollToTop.jsx'; // Import ScrollToTop component

export default function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop /> {/* Add it here to ensure scrolling */}
      <Outlet />
      <Footer />
    </>
  );
}
