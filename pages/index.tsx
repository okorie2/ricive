import React from "react";
import dynamic from "next/dynamic";

const Dashboard = dynamic(() => import("modules/dashboard-module"), {
  ssr: false,
});

const DashBoardPage = () => {
  return <Dashboard />;
};

export default DashBoardPage;
