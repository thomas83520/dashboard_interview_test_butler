import React from "react";

export default function FlatLocationItem({ info, value }) {
  return (
    <div style={{display:"flex"}}>
      <p className="info">{info}</p>
      <p className="value">
        {value}
      </p>
    </div>
  );
}
