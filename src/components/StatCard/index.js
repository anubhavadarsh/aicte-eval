import React from "react";

const StatCard = ({ header, content }) => {
  return (
    <div className="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:mt-0 mt-4 xl:ml-5 sm:ml-2 flex-1">
      <p className="text-3xl font-semibold text-gray-800">{header}</p>
      <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">
        {content}
      </p>
    </div>
  );
};

export default StatCard;
