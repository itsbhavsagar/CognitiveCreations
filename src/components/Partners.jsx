import React from "react";
// src/main.jsx or src/index.jsx

// Dynamically import all logos
const logos = import.meta.glob("/src/assets/images/partner_logos/*.png", {
  eager: true,
});

// Generate an array of logos
const generateLogos = () => {
  return Object.keys(logos).map((key, index) => ({
    src: logos[key].default,
    alt: `Company ${index + 1}`,
  }));
};

const Partners = () => {
  const partners = generateLogos();

  return (
    <section className="py-12 bg-gray-100 overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Our Partners</h2>
        <p className="text-lg mb-12 text-gray-700">
          We proudly collaborate with these esteemed companies.
        </p>

        {/* Right to Left Scrolling Logos */}
        <div className="relative mb-4">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-100 pointer-events-none"></div>
          <div className="flex overflow-hidden relative">
            <div className="flex animate-scroll-left whitespace-nowrap">
              {partners.concat(partners).map((partner, index) => (
                <div key={index} className="inline-block w-20 mx-4">
                  <img
                    src={partner.src}
                    alt={partner.alt}
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Left to Right Scrolling Logos */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-gray-100 pointer-events-none"></div>
          <div className="flex overflow-hidden relative">
            <div className="flex animate-scroll-right whitespace-nowrap">
              {partners.concat(partners).map((partner, index) => (
                <div key={index} className="inline-block w-20 mx-4">
                  <img
                    src={partner.src}
                    alt={partner.alt}
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
