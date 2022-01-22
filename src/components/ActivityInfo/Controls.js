import AddMemberModal from "./AddModal";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Controls = ({ sl, selectedMembers }) => {
  const [showModal, setShowModal] = useState(false);
  const members = useSelector((state) => state.team.members);

  const navigate = useNavigate();
  const handleClick = () => {
    if (!members.length) {
      navigate("/team");
      return;
    }
    setShowModal(true);
  };

  return (
    <>
      <div className="px-4 py-3 bg-gray-50 text-right sm:px-6 flex justify-between">
        <Avatars members={selectedMembers} />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white"
          onClick={handleClick}
        >
          add members
        </button>
      </div>
      {showModal && <AddMemberModal setShowModal={setShowModal} sl={sl} />}
    </>
  );
};

const Avatars = ({ members }) => {
  const Avatar = ({ image, name }) => {
    return (
      <span className="">
        <img
          className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white"
          src={image}
          alt={name}
        />
      </span>
    );
  };

  return (
    <div className="flex -space-x-2">
      {members?.map((m) => (
        <Avatar image={m.image} name={m.name} key={m.id} />
      ))}
    </div>
  );
};
export default Controls;
