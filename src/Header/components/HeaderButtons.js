import React from "react";

export default function HeaderButtons() {
  return (
    <div className="headerButtons">
      <div className="notifications">
        <i className="material-icons-outlined">notifications</i>
        <div className="badge"/>
      </div>
      <div className="avatar" style={{marginRight:"20px"}}>
        <span>J</span>
      </div>
    </div>
  );
}
