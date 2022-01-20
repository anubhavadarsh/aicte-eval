import React from "react";
import { ViewGridAddIcon } from "@heroicons/react/solid";

const AddMember = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg backdrop-blur dark:border-slate-50/[0.06] bg-white supports-backdrop-blur:bg-white/95 dark:bg-slate-500/75">
      <div className="flex items-center justify-center h-32 w-32 border rounded-full border-white p-10 hover:bg-white/25 hover:cursor-pointer transition duration-300 delay-150 my-20">
        <ViewGridAddIcon color="white" />
      </div>
    </div>
  );
};

export default AddMember;
