import React from "react";
import Header from "../common/Header";
import Partners from "../sections/Partners";
import Subscription from "../sections/Subscription";
// import Services from "./Services";
import Footer from "../common/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Partners />
      {/* <Services /> */}
      <Subscription />
      <Footer />
    </div>
  );
};

export default Home;
