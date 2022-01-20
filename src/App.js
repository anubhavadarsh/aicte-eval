import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardContainer from "container/Dashbord";
import TeamContainer from "container/Team";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="dashboard" element={<DashboardContainer />} />
        <Route path="team" element={<TeamContainer />} />
        <Route path="/" element={<DashboardContainer />} />
      </Routes>
    </Router>
  );
};

export default App;
