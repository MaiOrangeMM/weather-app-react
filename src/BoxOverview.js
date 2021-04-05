import React from "react";

import BOCurrentInfo from "./BOCurrentInfo";
import BOSearchBar from "./BOSearchBar";

export default function BoxOverview() {
  return (
    <div className="box-overview container p-5">
      <BOSearchBar />
      <BOCurrentInfo />
    </div>
  );
}
