import React from "react";

import InfoValueBlock from "./InfoValueBlock";

export default function FlatInfo() {
  return (
    <div className="row">
      <div className="col-6 col-s-6 ">
        <InfoValueBlock info="Apartment Type" value="Single Room" />
      </div>
      <div className="col-6 col-s-6 ">
        <InfoValueBlock info="Apartment Category" value="Residential" />
      </div>
      <div className="col-6 col-s-6 ">
        <InfoValueBlock info="Apartment Status" value="Occupied" />
      </div>
    </div>
  );
}
