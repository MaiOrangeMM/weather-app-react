import React, { useState } from "react";
import axios from "axios";

import { apiUrlCurrent } from "./Api";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function BOSearchBar({ setTemp, setUpdateCity }) {
  const [city, setCity] = useState("");

  function showCurrent(response) {
    console.log(response.data.name);
    setTemp(Math.round(response.data.main.temp));
    setUpdateCity(response.data.name);
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (city.length > 0) {
      setCity(city);
      axios.get(apiUrlCurrent).then(showCurrent);
    } else {
      console.log("else");
    }
  }

  return (
    <form className="row justify-content-center pb-5" onSubmit={handleSubmit}>
      <div className="col-6">
        <input
          type="search"
          className="form-control"
          id="input-city"
          placeholder="Enter your city"
          onChange={handleChange}
        />
      </div>

      <div className="col-1">
        <button type="submit" className="btn btn-danger" id="button-city">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </form>
  );
}
