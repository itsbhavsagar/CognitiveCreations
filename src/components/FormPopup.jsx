import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import Notification from "./Notification"; // Import the Notification component

const FormPopup = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    if (isOpen) {
      // Clear notification when the form is opened
      setNotification(null); // <-- This line clears the previous notification
    }
  }, [isOpen]); // <-- Depend on isOpen to clear notification when form opens

  const handleSubmit = (e) => {
    e.preventDefault();
    const templateParams = {
      from_name: name,
      from_email: email,
      message,
    };

    emailjs
      .send(
        "service_01o9szo", // Your Service ID
        "template_2a97bdc", // Your Template ID
        templateParams,
        "pxKYfrMr96RheX1yd" // Your User ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setNotification({
            message: "Email sent successfully!",
            type: "success",
          });

          // Delay closing the form to show the notification
          setTimeout(() => {
            onClose();
          }, 2000); // Delay for 3 seconds (adjust as needed)
          setName("");
          setEmail("");
          setMessage("");
        },
        (err) => {
          console.log("FAILED...", err);
          setNotification({
            message: "Failed to send email. Please try again later.",
            type: "error",
          });

          // Delay closing the form to show the notification
          setTimeout(() => {
            onClose();
          }, 2000); // Delay for 3 seconds (adjust as needed)
          setName("");
          setEmail("");
          setMessage("");
        }
      );
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-bold mb-4">Book Free Consultation</h2>
          <form onSubmit={handleSubmit}>
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
            <div className="mb-4">
              <label className="block text-gray-700">Message</label>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
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
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}
    </>
  );
};

export default FormPopup;
