import Navbar from "./components/common/Navbar";

import { Outlet } from "react-router-dom";
export default function App() {
  return (
    <>
      <Navbar />
      <Outlet></Outlet>
    </>
  );
}
