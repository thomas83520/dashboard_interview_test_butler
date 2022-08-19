import React from "react";

import InfoValueBlock from "./InfoValueBlock";

export default function MoreInfo() {
  return (
    <div className="moreInfo" style={{ padding: "10px 30px" }}>
      <div className="property" style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{ border: "1px solid black", borderRadius: "5px", padding: 0 }}
        >
          <i className="material-icons">done</i>
        </div>
        <p style={{ marginLeft: "10px" }}>Pets allowed</p>
      </div>
      <InfoValueBlock info="Notes" value="Dog and Cat" />
    </div>
  );
}
