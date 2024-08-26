import React from "react";

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

// Shuffle function for randomizing array
const shuffleArray = (array) => {
  let shuffled = array.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const Partners = () => {
  const partners = generateLogos();
  const shuffledPartners1 = shuffleArray(partners);
  const shuffledPartners2 = shuffleArray(partners);

  return (
    <section className="py-12 bg-gray-100 overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Our Partners</h2>
        <p className="text-lg mb-12 text-gray-700">
          We proudly collaborate with these esteemed companies.
        </p>

        {/* Right to Left Scrolling Logos */}
        <div className="relative mb-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-100 pointer-events-none"></div>
          <div className="flex whitespace-nowrap animate-scroll-left">
            {shuffledPartners1
              .concat(shuffledPartners1)
              .map((partner, index) => (
                <div
                  key={index}
                  className="inline-block w-20 flex-shrink-0 mx-4"
                >
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

        {/* Left to Right Scrolling Logos */}
        {/* <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-gray-100 pointer-events-none"></div>
          <div className="flex whitespace-nowrap animate-scroll-right">
            {shuffledPartners2
              .concat(shuffledPartners2)
              .map((partner, index) => (
                <div
                  key={index}
                  className="inline-block w-20 flex-shrink-0 mx-4"
                >
                  <img
                    src={partner.src}
                    alt={partner.alt}
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
              ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Partners;
