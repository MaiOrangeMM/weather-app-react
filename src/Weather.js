import React, { useState } from "react";
import axios from "axios";

import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/react-fontawesome";
import "@fortawesome/free-brands-svg-icons";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faThermometerHalf, faWind } from '@fortawesome/free-solid-svg-icons';

library.add(faWind);

// API
const apiKey = "&appid=ea446638ab71304f56de134b4323492c";
const apiMetric = "&units=metric";

const city = "London";

// Current
const apiCurrent = "https://api.openweathermap.org/data/2.5/weather?q=";
const apiUrlCurrent = `${apiCurrent}${city}${apiMetric}${apiKey}`;

// Forecast
// const apiForecast = "https://api.openweathermap.org/data/2.5/onecall?";





function Weather() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setTemperature(response.data.main.temp);
    setReady(true);
  }

  if (ready) {
    return (
      <section class="wrapper d-flex align-items-center justify-content-center">
        <div class="shadow-lg bg-body ">
          <div class="box-overview container py-5 px-5">
            <div class="row justify-content-center pb-5">
              <div class="col-6">
                <input type="text" class="form-control" placeholder="Enter your city" />
              </div>

              <div class="col-1">
                <button class="btn btn-danger"><FontAwesomeIcon icon={faSearch} /></button>
              </div>
            </div>

            <div class="row pt-5 pb-5">
              <div class="col-7">
                <h1 class="h5 py-0 my-0 text-light">Frankfurt am Main</h1>
                <p class="h6 py-0 my-0 text-light" >Thu 11 Mar | 09 AM</p>
                <div class="d-flex">
                  <p class="h2 px-0 mx-0 text-light">{Math.round(temperature)}</p>
                  <span class="h6 text-light">°C</span>
                </div>

              </div>
            </div>
          </div>

          <div class="box-detail container py-5 px-5">
            <div class="row pb-3">
              <div class="col-7">
                <p class="h5 py-0 my-0">Details</p>
                <p class="h6 py-0 my-0 text-black-50">Weather Today</p>
              </div>
            </div>

            <div class="row pb-5 px-2 gx-5">
              <div class="col-4">
                <div class="row">
                  <div class="col-2 d-flex justify-content-center">
                    <i class="fas fa-cloud fs-3 align-self-center"></i>
                  </div>

                  <div class="col-10">
                    <p class="h6 py-0 my-0">Condition</p>
                    <p class="h6 py-0 my-0 text-black-50">Cloudy</p>
                  </div>
                </div>
              </div>

              <div class="col-4">
                <div class="row">
                  <div class="col-2 d-flex justify-content-center">
                    <FontAwesomeIcon icon={faThermometerHalf} class="fs-2 align-self-center" />
                  </div>

                  <div class="col-10">
                    <p class="h6 py-0 my-0">Temperature</p>
                    <p class="h6 py-0 my-0 text-black-50">-4° | 12°</p>
                  </div>
                </div>
              </div>

              <div class="col-4">
                <div class="row">
                  <div class="col-2 d-flex justify-content-center">
                    <FontAwesomeIcon icon={faWind} class="fs-2 align-self-center" />
                  </div>

                  <div class="col-10">
                    <p class="h6 py-0 my-0">Wind speed</p>
                    <p class="h6 py-0 my-0 text-black-50">5,0 km/h</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="row pb-3">
              <div class="col-7">
                <p class="h5 py-0 my-0">This Week</p>
                <p class="h6 py-0 my-0 text-black-50">Weekly Forecast</p>
              </div>
            </div>

            <div class="row">
              <div class="col">
                <div class="card shadow-sm">
                  <div class="card-body text-center">
                    <p class="card-title">Fri</p>
                    <i class="fas fa-cloud-sun"></i>
                    <p class="card-text text-black-50">10° | 12°</p>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="card shadow-sm">
                  <div class="card-body text-center">
                    <p class="card-title">Sa</p>
                    <i class="fas fa-cloud-sun"></i>
                    <p class="card-text text-black-50">10° | 12°</p>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="card shadow-sm">
                  <div class="card-body text-center">
                    <p class="card-title">Su</p>
                    <i class="fas fa-cloud-sun"></i>
                    <p class="card-text text-black-50">10° | 12°</p>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="card shadow-sm">
                  <div class="card-body text-center">
                    <p class="card-title">Mo</p>
                    <i class="fas fa-cloud-sun"></i>
                    <p class="card-text text-black-50">10° | 12°</p>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="card shadow-sm">
                  <div class="card-body text-center">
                    <p class="card-title">Tue</p>
                    <i class="fas fa-cloud-sun"></i>
                    <p class="card-text text-black-50">10° | 12°</p>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="card shadow-sm">
                  <div class="card-body text-center">
                    <p class="card-title">Wed</p>
                    <i class="fas fa-cloud-sun"></i>
                    <p class="card-text text-black-50">10° | 12°</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  else {
    axios.get(apiUrlCurrent).then(handleResponse);
    return "Loading...";
  }
}

export default Weather;
