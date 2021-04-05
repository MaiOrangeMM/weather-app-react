import React from "react";

import BDCurrentDetails from "./BDCurrentDetails";
import BDForecast from "./BDForecast";

export default function BoxDetails() {
  return (
    <div className="box-detail container p-5">
      <BDCurrentDetails />
      <BDForecast />
    </div>
  );
}
