import React, { useState } from "react";
import { useSelector } from "react-redux";
import AddMember from "./AddMember";
import AddMemberModal from "./AddMemberModal";
import Card from "./MemberCard";

const Team = () => {
  const [showAddModal, setShowAddModal] = useState(false);

  const members = useSelector((state) => state.team.members);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        {members.map((member) => (
          <Card
            id={member.id}
            name={member.name}
            about={member.about}
            designation={member.designation}
            image={member.image}
            facebook={member.facebook}
            instagram={member.instagram}
            twitter={member.twitter}
            key={member.id}
          />
        ))}
        <AddMember setShowModal={setShowAddModal} />
      </div>
      {showAddModal && (
        <AddMemberModal
          showModal={showAddModal}
          setShowModal={setShowAddModal}
        />
      )}
    </>
  );
};

export default Team;
