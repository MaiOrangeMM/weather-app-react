import React from "react";

export default function BDCurrentDetails() {
  return (
    <div>
      <div className="row pb-3">
        <div className="col-7">
          <p className="h5 py-0 my-0">Details</p>
          <p className="h6 py-0 my-0 text-black-50">Weather Today</p>
        </div>
      </div>

      <div className="row pb-5 px-2 gx-5">
        <div className="col-4">
          <div className="row">
            <div className="col-4">
              <img src="" alt="" id="display-weathericon" width="110%" />
            </div>

            <div className="col-8 justify-content-center">
              <p className="h6 py-0 my-0">Condition</p>
              <p
                className="py-0 my-0 text-black-50 text-capitalize"
                id="display-condition"
              >
                [condition]
              </p>
            </div>
          </div>
        </div>

        <div className="col-4">
          <div className="row">
            <div className="col-4 d-flex justify-content-center">
              <i className="fas fa-thermometer-half fs-2 align-self-center"></i>
            </div>

            <div className="col-8">
              <p className="h6 py-0 my-0">Temperature</p>
              <p className=" py-0 my-0 text-black-50" id="display-fromto">
                [min_temp] | [max_temp]
              </p>
            </div>
          </div>
        </div>

        <div className="col-4">
          <div className="row">
            <div className="col-4 d-flex justify-content-center">
              <i className="fas fa-wind fs-3 align-self-center"></i>
            </div>

            <div className="col-8">
              <p className="h6 py-0 my-0">Wind speed</p>
              <p className=" py-0 my-0 text-black-50" id="display-windspeed">
                [wind_speed]
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
