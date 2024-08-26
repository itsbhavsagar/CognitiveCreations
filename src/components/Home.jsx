import React from "react";
import Header from "./Header";
import Partners from "./Partners";
import Subscription from "./subscription/Subscription";
// import Services from "./Services";
import Footer from "../components/Footer";

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
