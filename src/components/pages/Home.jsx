import React from 'react';
import Header from '../common/Header';
import Partners from '../sections/Partners';
import Subscription from '../sections/Subscription';
import CTA from '../sections/CallToAction';
import TestimonialList from '../sections/TestimonialList';

const Home = () => {
  return (
    <div>
      <Header />
      <Partners />
      <Subscription />
      <TestimonialList />
      <CTA />
    </div>
  );
};

export default Home;
