import React from 'react';
import Header from '../common/Header';
import Partners from '../sections/Partners';
import Subscription from '../sections/Subscription';
import CTA from '../sections/CallToAction';
import TestimonialList from '../sections/TestimonialList';
import Pricing from '../sections/Pricing';

const Home = () => {
  return (
    <div>
      <Header />
      <Partners />
      <Subscription />
      <TestimonialList />
      <CTA />
      <Pricing/>
    </div>
  );
};

export default Home;
