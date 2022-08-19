import React from "react";

export default function HeaderTitle({ flatNumber }) {
  return (
    <div className="headerTitle">
      <span className="residenceName" >Residence Profile</span>
      <i className="material-icons">navigate_next</i>
      <span className="flatName">Flat {flatNumber} Information</span>
    </div>
  );
}
