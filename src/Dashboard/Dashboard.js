import React from "react";
import MainPanel from "./MainPanel/MainPanel";
import "./dashboard.css";
import TableContainer from "./TableContainer";
export default function Dashboard() {
  return (
    <div className="row">
      <MainPanel />
      <TableContainer/>
    </div>
  );
}
