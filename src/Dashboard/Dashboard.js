import React from "react";

import MainPanel from "./MainPanel/MainPanel";
import TableContainer from "./TableContainer";

import "./dashboard.css";

export default function Dashboard() {
  return (
    <div className="row">
      <MainPanel />
      <TableContainer/>
    </div>
  );
}
