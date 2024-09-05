import Navbar from "./components/common/Navbar";

import { Outlet } from "react-router-dom";

import Footer from "./components/common/Footer";
export default function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
