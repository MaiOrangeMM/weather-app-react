import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";

import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/react-fontawesome";
import "@fortawesome/free-brands-svg-icons";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faThermometerHalf,
  faWind,
} from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";

library.add();

function Weather() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState("Wiesbaden");

  function handleResponse(response) {
    setWeatherData({
      coord: response.data.coord,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      minTemperature: response.data.main.temp_min,
      maxTemperature: response.data.main.temp_max,
      condition: response.data.weather[0].description,
      windSpeed: response.data.wind.speed,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`,
    });
    setReady(true);
  }

  function search() {
    // API
    const apiKey = "&appid=ea446638ab71304f56de134b4323492c";
    const apiMetric = "&units=metric";

    // Current
    const apiCurrent = "https://api.openweathermap.org/data/2.5/weather?q=";
    const apiUrlCurrent = `${apiCurrent}${city}${apiMetric}${apiKey}`;

    // Forecast
    // const apiForecast = "https://api.openweathermap.org/data/2.5/onecall?";
    axios.get(apiUrlCurrent).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (ready) {
    return (
      <section className="wrapper d-flex align-items-center justify-content-center">
        <div className="shadow-lg bg-body ">
          <div className="box-overview container py-5 px-5">
            <form onSubmit={handleSubmit}>
              <div className="row justify-content-center pb-5">
                <div className="col-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your city"
                    onChange={handleCityChange}
                  />
                </div>

                <div className="col-1">
                  <button className="btn btn-danger">
                    <FontAwesomeIcon icon={faSearch} />
                  </button>
                </div>
              </div>
            </form>

            <div className="row pt-5 pb-5">
              <div className="col-7">
                <h1 className="h5 py-0 my-0 text-light">{weatherData.city}</h1>

                <p className="h6 py-0 my-0 text-light">
                  <FormattedDate date={weatherData.date} />
                </p>
                <div className="d-flex">
                  <p className="h2 px-0 mx-0 text-light">
                    {Math.round(weatherData.temperature)}
                  </p>
                  <span className="h6 text-light">°C</span>
                </div>
              </div>
            </div>
          </div>

          <div className="box-detail container py-5 px-5">
            <div className="row pb-3">
              <div className="col-7">
                <p className="h5 py-0 my-0">Details</p>
                <p className="h6 py-0 my-0 text-black-50">Weather Today</p>
              </div>
            </div>

            <div className="row pb-5 px-2 gx-5">
              <div className="col-4">
                <div className="row">
                  <div className="col-2 d-flex justify-content-center">
                    <img
                      src={weatherData.iconUrl}
                      alt="weather condition icon"
                    />
                  </div>

                  <div className="col-10">
                    <p className="h6 py-0 my-0">Condition</p>
                    <p className="h6 py-0 my-0 text-black-50 text-capitalize">
                      {weatherData.condition}
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-4">
                <div className="row">
                  <div className="col-2 d-flex justify-content-center">
                    <FontAwesomeIcon
                      icon={faThermometerHalf}
                      className="fs-2 align-self-center"
                    />
                  </div>

                  <div className="col-10">
                    <p className="h6 py-0 my-0">Temperature</p>
                    <p className="h6 py-0 my-0 text-black-50">
                      {Math.round(weatherData.minTemperature)}° |{" "}
                      {Math.round(weatherData.maxTemperature)}°
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-4">
                <div className="row">
                  <div className="col-2 d-flex justify-content-center">
                    <FontAwesomeIcon
                      icon={faWind}
                      className="fs-3 align-self-center"
                    />
                  </div>

                  <div className="col-10">
                    <p className="h6 py-0 my-0">Wind speed</p>
                    <p className="h6 py-0 my-0 text-black-50">
                      {weatherData.windSpeed} km/h
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row pb-3">
              <div className="col-7">
                <p className="h5 py-0 my-0">This Week</p>
                <p className="h6 py-0 my-0 text-black-50">Weekly Forecast</p>
              </div>
            </div>

            <WeatherForecast coords={weatherData.coord} />
          </div>
          <div className="text-center pb-4">
            <a href="https://github.com/MayElectric/weather-app-react">
              <FontAwesomeIcon
                icon={faGithubSquare}
                className="fs-3 text-dark"
              />
            </a>
          </div>
        </div>
      </section>
    );
  } else {
    search();
    return "Loading...";
  }
}

export default Weather;
