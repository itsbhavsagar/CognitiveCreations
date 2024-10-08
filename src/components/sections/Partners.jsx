import React, { useState, useEffect } from 'react';

// Dynamically import all logos
const logos = import.meta.glob('/src/assets/images/partner_logos/*.png', {
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
  const shuffled = array.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Formatting function to add commas to numbers
const formatNumber = (number) => {
  return number.toLocaleString();
};

const Partners = () => {
  const partners = generateLogos();
  const shuffledPartners = shuffleArray(partners);
  const totalPartners = partners.length;

  // Dynamic counts
  const [businessCount, setBusinessCount] = useState(0);
  const [partnerCount, setPartnerCount] = useState(0);

  useEffect(() => {
    // Business Count Animation
    const targetBusinessCount = 100;
    const businessDuration = 2000;
    const businessIncrement = Math.ceil(
      targetBusinessCount / (businessDuration / 50)
    );

    const businessCounter = setInterval(() => {
      setBusinessCount((prev) => {
        if (prev + businessIncrement >= targetBusinessCount) {
          clearInterval(businessCounter);
          return targetBusinessCount;
        }
        return prev + businessIncrement;
      });
    }, 50);

    // Partner Count Animation
    const targetPartnerCount = totalPartners;
    const partnerDuration = 2000;
    const partnerIncrement = Math.ceil(
      targetPartnerCount / (partnerDuration / 50)
    );

    const partnerCounter = setInterval(() => {
      setPartnerCount((prev) => {
        if (prev + partnerIncrement >= targetPartnerCount) {
          clearInterval(partnerCounter);
          return targetPartnerCount;
        }
        return prev + partnerIncrement;
      });
    }, 50);

    // Cleanup intervals on component unmount
    return () => {
      clearInterval(businessCounter);
      clearInterval(partnerCounter);
    };
  }, [totalPartners]);

  return (
    <section className="py-8 bg-gray-100 overflow-hidden">
      <div className="container w-full mx-auto px-6 text-center">
        <h2
          className="text-4xl font-serif font-extrabold mb-6 text-gray-700"
          style={{ fontFamily: 'GameOfSquids' }}
        >
          BRANDS WE PARTNER WITH
        </h2>

        <p className="text-lg mb-10 text-gray-700">
          Empowering{' '}
          <span className="font-bold text-orange-600">
            {formatNumber(businessCount)}+
          </span>{' '}
          brands with{' '}
          <span className="font-bold text-orange-600">cutting-edge</span>{' '}
          digital marketing strategies, across in partnership with{' '}
          <span className="font-bold text-orange-600">
            {formatNumber(partnerCount)}+
          </span>{' '}
          industry leaders driving global success.
        </p>

        {/* Scrolling Logos */}
        <div className="relative overflow-hidden py-4">
          <div className="scroll-left">
            <div className="scroll-left-inner">
              {[...shuffledPartners, ...shuffledPartners].map(
                (partner, index) => (
                  <div
                    key={partner.src}
                    className="flex-shrink-0 mx-4"
                    style={{ width: '50px' }}
                  >
                    <img
                      src={partner.src}
                      alt={partner.alt}
                      className="w-full h-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
