import React from "react";

const MemberCard = () => {
  return (
    <div class="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg">
      <div class="inline-flex shadow-lg rounded-full overflow-hidden h-30 w-30">
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&w=128&h=128&q=60&facepad=2"
          alt=""
          class="h-full w-full"
        />
      </div>

      <h2 class="mt-4 font-bold text-xl text-black">Sebastian Bennett</h2>
      <h6 class="mt-2 text-sm font-medium text-black">Founder</h6>

      <p class="text-xs text-black text-center mt-3">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab enim
        molestiae nulla.
      </p>

      <ul class="flex flex-row mt-4 space-x-2">
        <li>
          <a
            href=""
            class="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800"
          >
            <i class="fab fa-facebook"></i>
          </a>
        </li>
        <li>
          <a
            href=""
            class="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800"
          >
            <i class="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a
            href=""
            class="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800"
          >
            <i class="fab fa-instagram"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MemberCard;
