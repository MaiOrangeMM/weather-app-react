import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function BOSearchBar() {
  return (
    <div className="row justify-content-center pb-5">
      <div className="col-6">
        <input
          type="text"
          className="form-control"
          id="input-city"
          placeholder="Enter your city"
        />
      </div>

      <div className="col-1">
        <button className="btn btn-danger" id="button-city">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </div>
  );
}
