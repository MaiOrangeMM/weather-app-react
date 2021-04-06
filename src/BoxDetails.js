import React, { useState } from "react";

import BDCurrentDetails from "./BDCurrentDetails";
import BDForecast from "./BDForecast";

const con = ([condition, setCondition] = useState(""));
export const con;

export default function BoxDetails() {
  const [condition, setCondition] = useState("");
  const [minTemp, setMinTemp] = useState(null);
  const [maxTemp, setMaxTemp] = useState(null);
  const [wind, setWind] = useState(null);

  return (
    <div className="box-detail container p-5">
      <BDCurrentDetails />
      <BDForecast />
    </div>
  );
}
