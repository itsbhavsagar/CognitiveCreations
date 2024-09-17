import React, { useState } from "react";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const pricingData = {
    monthly: {
      basic: 150,
      standard: 300,
      premium: 500,
    },
    yearly: {
      basic: 1200,
      standard: 2400,
      premium: 4000,
    },
  };

  const toggleBillingCycle = () => {
    setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly");
  };

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">Our Pricing Plans</h1>
        <p className="text-gray-600 mt-4 text-md sm:text-lg">
          Choose the plan that's right for your business needs.
        </p>
      </div>

      {/* Toggle Button */}
      <div className="flex justify-center mb-12">
        <label className="flex items-center cursor-pointer">
          <span className="mr-3 text-gray-500 font-medium">Billed Monthly</span>
          <div className="relative">
            <input
              type="checkbox"
              className="sr-only"
              onChange={toggleBillingCycle}
            />
            <div className="block bg-gray-300 w-12 h-6 rounded-full"></div>
            <div
              className={`absolute top-0 left-0 w-6 h-6 bg-blue-600 rounded-full transition-transform ${
                billingCycle === "yearly" ? "translate-x-6" : ""
              }`}
            ></div>
          </div>
          <span className="ml-3 text-gray-500 font-medium">Billed Yearly</span>
        </label>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Basic Plan */}
        <div className="border rounded-lg shadow-xl hover:shadow-2xl transition-shadow p-8 bg-white relative">
          <h2 className="text-xl sm:text-2xl font-bold text-center bg-gradient-to-r from-blue-500 to-teal-400 text-white p-4 rounded-t-lg">
            Basic
          </h2>
          <p className="text-gray-600 text-center mt-4">
            Ideal for small businesses just starting out.
          </p>
          <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center my-6">
            ${billingCycle === "monthly" ? pricingData.monthly.basic : pricingData.yearly.basic}
            <span className="text-base sm:text-lg">/{billingCycle}</span>
          </div>
          <ul className="text-gray-700 space-y-3 mb-6">
            <li className="flex items-center">
              <span className="text-blue-500 mr-2">✔</span> Social Media Management
            </li>
            <li className="flex items-center">
              <span className="text-blue-500 mr-2">✔</span> SEO Optimization
            </li>
            <li className="flex items-center">
              <span className="text-blue-500 mr-2">✔</span> Email Marketing
            </li>
          </ul>
          <button className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-bold">
            Get Started
          </button>
        </div>

        {/* Standard Plan */}
        <div className="border-2 border-blue-500 rounded-lg shadow-xl hover:shadow-2xl transition-shadow p-8 bg-white relative">
          <div className="absolute top-0 right-0 mt-4 mr-4 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full">
            Most Popular
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-center bg-gradient-to-r from-purple-500 to-pink-400 text-white p-4 rounded-t-lg">
            Standard
          </h2>
          <p className="text-gray-600 text-center mt-4">
            Perfect for growing businesses looking to scale.
          </p>
          <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center my-6">
            ${billingCycle === "monthly" ? pricingData.monthly.standard : pricingData.yearly.standard}
            <span className="text-base sm:text-lg">/{billingCycle}</span>
          </div>
          <ul className="text-gray-700 space-y-3 mb-6">
            <li className="flex items-center">
              <span className="text-blue-500 mr-2">✔</span> Everything in Basic
            </li>
            <li className="flex items-center">
              <span className="text-blue-500 mr-2">✔</span> Advanced SEO & PPC
            </li>
            <li className="flex items-center">
              <span className="text-blue-500 mr-2">✔</span> Content Creation
            </li>
          </ul>
          <button className="w-full py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-bold">
            Get Started
          </button>
        </div>

        {/* Premium Plan */}
        <div className="border rounded-lg shadow-xl hover:shadow-2xl transition-shadow p-8 bg-white relative">
          <h2 className="text-xl sm:text-2xl font-bold text-center bg-gradient-to-r from-green-500 to-blue-400 text-white p-4 rounded-t-lg">
            Premium
          </h2>
          <p className="text-gray-600 text-center mt-4">
            Comprehensive services for large-scale businesses.
          </p>
          <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center my-6">
            ${billingCycle === "monthly" ? pricingData.monthly.premium : pricingData.yearly.premium}
            <span className="text-base sm:text-lg">/{billingCycle}</span>
          </div>
          <ul className="text-gray-700 space-y-3 mb-6">
            <li className="flex items-center">
              <span className="text-blue-500 mr-2">✔</span> Everything in Standard
            </li>
            <li className="flex items-center">
              <span className="text-blue-500 mr-2">✔</span> Full Website Management
            </li>
            <li className="flex items-center">
              <span className="text-blue-500 mr-2">✔</span> Lead Generation & Analytics
            </li>
          </ul>
          <button className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-bold">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
