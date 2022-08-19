import React from "react";
import HeaderButtons from "./components/HeaderButtons";
import HeaderTitle from "./components/HeaderTitle";

import "./header.css";

export default function Header() {
  return (
    <div className="header">
        <HeaderTitle flatNumber={"3B"} />
        <HeaderButtons />
    </div>
  );
}
