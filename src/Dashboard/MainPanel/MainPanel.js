import React from "react";
import CheckInOut from "./components/CheckInOut";
import FlatInfo from "./components/FlatInfo";
import FlatLocation from "./components/FlatLocation";
import MoreInfo from "./components/MoreInfo";
import PanelHeader from "./components/PanelHeader";

export default function MainPanel() {
  return (
    <div className="col-6 col-s-12 mainPanel">
      <div className="container">
        <PanelHeader />
        <hr className="solid" />
        <FlatLocation />
        <hr className="solid" />
        <FlatInfo />
        <hr className="solid" />
        <CheckInOut />
        <hr className="solid" />
        <MoreInfo />
      </div>
    </div>
  );
}
