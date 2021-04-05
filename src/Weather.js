import axios from "axios";

import BoxOverview from "./BoxOverview";
import BoxDetails from "./BoxDetails";
import Footer from "./Footer";

// API
const apiKey = "&appid=ea446638ab71304f56de134b4323492c";
const apiWeather = "https://api.openweathermap.org/data/2.5/weather?q=";
const apiForecast = "https://api.openweathermap.org/data/2.5/onecall?";
const apiMetric = "units=metric";

function Weather() {
  let apiURL = `${apiWeather}London&${apiMetric}&${apiKey}`;

  return (
    <div className="wrapper d-flex align-items-center justify-content-center">
      <section className="shadow-lg bg-body align-self-center">
        <BoxOverview />
        <BoxDetails />
        <Footer />
      </section>
    </div>
  );
}

export default Weather;
