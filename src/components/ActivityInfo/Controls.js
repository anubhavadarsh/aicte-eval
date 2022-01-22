import React from "react";

const Controls = () => {
  return (
    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6 flex justify-between">
      <Avatars />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white"
      >
        add members
      </button>
    </div>
  );
};

const Avatars = () => {
  return (
    <div className="flex -space-x-2">
      <a href="#" className="">
        <img
          className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white"
          src="https://source.unsplash.com/random/1280x720"
          alt="Guy"
        />
      </a>
      <a href="#" className="">
        <img
          className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white"
          src="https://source.unsplash.com/random/1280x720"
          alt="Max"
        />
      </a>
      <a href="#" className="">
        <img
          className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white"
          src="https://source.unsplash.com/random/1280x720"
          alt="Charles"
        />
      </a>
      <a href="#" className="">
        <img
          className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white"
          src="https://source.unsplash.com/random/1280x720"
          alt="Jade"
        />
      </a>
    </div>
  );
};
export default Controls;
