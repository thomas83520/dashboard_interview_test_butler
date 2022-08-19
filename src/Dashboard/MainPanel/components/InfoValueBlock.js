import React from "react";

export default function InfoValueBlock({info,value}) {
  return (
    <div className="infoValueBlock">
      <p className="info">{info}</p>
      <p className="value">{value}</p>
    </div>
  );
}
