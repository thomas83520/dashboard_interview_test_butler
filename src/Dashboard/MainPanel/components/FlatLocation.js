import React from "react";
import FlatLocationItem from "./FlatLocationItem";

export default function FlatLocation() {
  return (
    <div className="flatLocation">
      <FlatLocationItem info="Tower" value="1" />
      <FlatLocationItem info="Floor" value="3" />
      <FlatLocationItem info="Flat" value="B" />
    </div>
  );
}
