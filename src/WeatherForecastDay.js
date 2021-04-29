import React from "react";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Suns", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  function icon() {
    let iconCode = props.data.weather[0].icon;
    let iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;
    return iconUrl;
  }

  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  return (
    <div className="card shadow-sm">
      <div className="card-body text-center">
        <p className="card-title">{day()}</p>
        <img src={icon()} alt="weather condition icon" />
        <p className="card-text text-black-50">
          {maxTemperature()} | {minTemperature()}
        </p>
      </div>
    </div>
  );
}
