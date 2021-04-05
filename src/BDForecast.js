import React from "react";

export default function BDForecast() {
  return (
    <div>
      <div className="row pb-3">
        <div className="col-7">
          <p className="h5 py-0 my-0">This Week</p>
          <p className="h6 py-0 my-0 text-black-50">Weekly Forecast</p>
        </div>
      </div>

      <div className="row" id="display-forecast"></div>
    </div>
  );
}
