import React from "react";

import InfoValueBlock from "./InfoValueBlock";

export default function CheckInOut() {
  return (
    <div className="row">
      <div className="col-6 col-s-6">
        <InfoValueBlock info="check in date" value="12/04/2022 14:30" />
      </div>
      <div className="col-6 col-s-6">
        <InfoValueBlock info="check out date" value="-" />
      </div>
    </div>
  );
}
