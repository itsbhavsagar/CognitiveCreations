import React from 'react';
import Header from '../common/Header';
import Partners from '../sections/Partners';
import Subscription from '../sections/Subscription';
import CTA from '../sections/CallToAction';
import TestimonialList from '../sections/TestimonialList';
import Pricing from '../sections/Pricing';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Creatorinn- Digital Agency</title>
        <meta name="description" content="Creatoinn is a leading digital marketing agency specializing in SEO, PPC, social media marketing, and content creation. We help businesses grow online through customized strategies and innovative solutions tailored to your needs. Contact us to boost your digital presence and achieve your marketing goals." />
        <meta name="keywords" content="creative digital marketing, bespoke SEO strategies, targeted PPC campaigns, dynamic social media solutions, innovative content marketing, online brand elevation, data-driven advertising, growth-focused marketing, comprehensive digital solutions, advanced analytics and insights, customized marketing strategies, conversion optimization, digital branding experts" />
        <meta name="author" content="Creatorinn" />
        <meta property="og:title" content="Leading Digital Marketing Agency | Creatoinn" />
        <meta property="og:description" content="Creatoinn is your go-to digital marketing agency, offering innovative solutions in SEO, PPC, social media, and content marketing. We help businesses amplify their online presence and achieve their growth goals with tailored strategies and expert insights." />
        <meta property="og:image" content="https://www.creatorinn.com/" />
        <meta property="og:url" content="https://www.creatorinn.com/" />
        <meta property="og:type" content="website" />
      
      </Helmet>
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
