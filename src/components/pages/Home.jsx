import React from 'react';
import Header from '../common/Header';
import Partners from '../sections/Partners';
import Subscription from '../sections/Subscription';
import Projects from '../sections/Projects';
import TestimonialList from '../sections/TestimonialList';

const Home = () => {
  return (
    <div>
      <Header />
      <Partners />

      <Subscription />
      <TestimonialList />
      <Projects />
    </div>
  );
};

export default Home;
