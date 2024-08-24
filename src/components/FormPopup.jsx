// FormPopup.js

import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";

const FormPopup = ({ isOpen, onClose, onNotification }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState(""); // Phone Number
  const [website, setWebsite] = useState(""); // Website
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (isOpen) {
      // Optionally, reset form fields when the popup opens
      setName("");
      setPhone("");
      setWebsite("");
      setEmail("");
      setMessage("");
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      from_phone: phone,
      from_website: website,
      from_email: email,
      message,
    };

    emailjs
      .send(
        "service_01o9szo", // Your Service ID
        "template_s9mzj82", // Your Template ID
        templateParams,
        "pxKYfrMr96RheX1yd" // Your User ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          onNotification("Email sent successfully!", "success"); // Trigger success notification
          onClose(); // Close the popup
        },
        (err) => {
          console.error("FAILED...", err);
          onNotification("Failed to send email. Please try again later.", "error"); // Trigger error notification
          onClose(); // Close the popup
        }
      );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Book Free Consultation</h2>
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Phone Number Field */}
          <div className="mb-4">
            <label className="block text-gray-700">Phone Number</label>
            <input
              type="tel"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          {/* Website Field */}
          <div className="mb-4">
            <label className="block text-gray-700">Website</label>
            <input
              type="url"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              placeholder="https://example.com"
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Message Field */}
          <div className="mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea
              className="w-full px-3 py-2 border border-gray-300 rounded"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>

          {/* Form Buttons */}
          <div className="flex justify-end">
            <button
              type="button"
              className="mr-2 px-4 py-2 bg-gray-300 rounded"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormPopup;
