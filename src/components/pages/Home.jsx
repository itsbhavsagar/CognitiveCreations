import React from "react";
import Header from "../common/Header";
import Partners from "../sections/Partners";
import Subscription from "../sections/Subscription";
import Projects from "../sections/Projects";

const Home = () => {
  return (
    <div>
      <Header />
      <Partners />

      <Subscription />
      <Projects />
    </div>
  );
};

export default Home;
