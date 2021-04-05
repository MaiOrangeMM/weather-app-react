import React, { useState } from "react";
import axios from "axios";

import { apiUrlCurrent } from "./Api";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function BOSearchBar() {
  const [city, setCity] = useState("");
  const [updateCity, setUpdateCity] = useState("");
  const [temp, setTemp] = useState(null);
  const [description, setDescription] = useState("");

  function showCurrent(response) {
    setTemp(Math.round(response.data.main.temp));
    setDescription(response.data.weather[0].description);
    console.log(`${temp} & ${description}`);
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (city.length > 0) {
      setUpdateCity(city);
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

export const newTemp(temp);