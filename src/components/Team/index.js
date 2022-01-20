import React from "react";
import Card from "./MemberCard";

const Team = () => {
  let arr = [1, 2, 3, 4, 5];

  return (
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      {arr.map(() => (
        <Card />
      ))}
    </div>
  );
};

export default Team;
