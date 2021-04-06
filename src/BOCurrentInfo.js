import React from "react";

export default function BOCurrentInfo({ temp, updateCity }) {
  return (
    <div className="row pt-5 pb-5">
      <div className="col-7">
        <a href="#" id="link-position">
          <i className="fas fa-compass text-light"></i>
        </a>
        <h1 className="h5 py-0 my-0 text-light" id="display-city">
          {updateCity}
        </h1>
        <p className="h6 py-0 my-0 text-light" id="display-date">
          [Date] | [Time]
        </p>
        <div className="d-flex">
          <p className="h2 px-0 mx-0 text-light pe-1" id="display-temp">
            {temp}
          </p>
          <a
            href="#"
            className="h6 text-light text-decoration-none"
            id="link-celcius"
          >
            °C
          </a>
          <span className="h6 text-light">&nbsp;|&nbsp;</span>
          <a
            href="#"
            className="h6 text-light text-decoration-none text-muted"
            id="link-fahrenheit"
          >
            °F
          </a>
        </div>
      </div>
    </div>
  );
}
