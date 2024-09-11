// Notification.js

import React from "react";

const Notification = ({ message, type, onClose }) => {
  // Define styles based on the notification type
  const baseStyles = "fixed top-4 right-4 px-4 py-2 rounded shadow-md z-50";
  const typeStyles =
    type === "success"
      ? "bg-green-500 text-white"
      : type === "error"
      ? "bg-red-500 text-white"
      : "bg-gray-500 text-white";

  return (
    <div className={`${baseStyles} ${typeStyles}`}>
      <div className="flex items-center justify-between">
        <span>{message}</span>
        <button onClick={onClose} className="ml-4 text-lg font-bold">
          &times;
        </button>
      </div>
    </div>
  );
};

export default Notification;
