import React from "react";

const Notification = ({ message, type, onClose }) => {
  const notificationStyle = type === "success" ? "bg-green-500" : "bg-red-500";

  return (
    <div
      className={`${notificationStyle} fixed top-4 right-4 z-50 px-6 py-4 rounded-lg shadow-lg text-white flex items-center`}
    >
      <div className="flex-grow">{message}</div>
      <button
        onClick={onClose}
        className="ml-4 text-lg leading-none hover:text-gray-200"
      >
        &times;
      </button>
    </div>
  );
};

export default Notification;
