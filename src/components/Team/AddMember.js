import React from "react";
import { ViewGridAddIcon } from "@heroicons/react/solid";

const AddMember = ({ setShowModal }) => {
  return (
    <div
      className="flex flex-col items-center justify-center bg-slate-500/50 p-4 shadow rounded-lg"
      onClick={() => setShowModal(true)}
    >
      <div className="flex items-center justify-center h-32 w-32 border rounded-full border-white p-10 hover:bg-white/25 hover:cursor-pointer transition duration-300 delay-150 my-20 hover:scale-110">
        <ViewGridAddIcon color="white" />
      </div>
    </div>
  );
};

export default AddMember;
