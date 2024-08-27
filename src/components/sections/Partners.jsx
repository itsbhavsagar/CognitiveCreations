import React, { useState, useEffect } from "react";
import "../../../src/animation.css";

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
  const totalPartners = partners.length; // Get the actual number of partners

  // Dynamic counts
  const [businessCount, setBusinessCount] = useState(0);
  const [partnerCount, setPartnerCount] = useState(0);

  useEffect(() => {
    // Business Count Animation
    const targetBusinessCount = 100; // or any number you'd like
    const businessDuration = 2000; // duration in milliseconds
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
    const targetPartnerCount = totalPartners; // Use the actual number of partners
    const partnerDuration = 2000; // duration in milliseconds
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
    <section className="py-16 bg-gray-100 overflow-hidden">
      <div className="containe w-full mx-auto px-6 text-center">
        <h2 className="text-2xl font-serif font-extrabold mb-6 text-gray-700">
          BRANDS WE PARTNER WITH
        </h2>
        <p className="text-lg mb-10 text-gray-700">
          Empowering{" "}
          <span className="font-bold text-orange-600">
            {formatNumber(businessCount)}+
          </span>{" "}
          brands with{" "}
          <span className="font-bold text-orange-600">cutting-edge</span>{" "}
          digital marketing strategies, across in partnership with{" "}
          <span className="font-bold text-orange-600">
            {formatNumber(partnerCount)}+
          </span>{" "}
          industry leaders driving global success.
        </p>

        {/* Scrolling Logos */}
        <div className="relative overflow-hidden py-4">
          <div className="scroll-left">
            {[...shuffledPartners, ...shuffledPartners].map(
              (partner, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 mx-4"
                  style={{ width: "50px" }}
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
    </section>
  );
};

export default Partners;
