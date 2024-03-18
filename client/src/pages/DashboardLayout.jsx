import React from "react";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

function Dashboard_layout() {
  return (
    <div>
      <div className="flex  ">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard_layout;
