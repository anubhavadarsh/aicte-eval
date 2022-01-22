import React from "react";
import Example from "./ActivitiesDash";
import CategoryTable from "./CategoryTable";
import ProgrammeTable from "./ProgrammeTable";

const Dashboard = () => {
  return (
    <>
      <CategoryTable />
      <ProgrammeTable />
      <Example />
    </>
  );
};

export default Dashboard;
