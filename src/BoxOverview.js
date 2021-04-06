import React, { useState } from "react";

import BOCurrentInfo from "./BOCurrentInfo";
import BOSearchBar from "./BOSearchBar";

export default function BoxOverview() {
  const [updateCity, setUpdateCity] = useState("");
  const [temp, setTemp] = useState(null);

  return (
    <div className="box-overview container p-5">
      <BOSearchBar setTemp={setTemp} setUpdateCity={setUpdateCity} />
      <BOCurrentInfo temp={temp} updateCity={updateCity} />
    </div>
  );
}
