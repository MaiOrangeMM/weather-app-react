// API
const apiKey = "&appid=ea446638ab71304f56de134b4323492c";
const apiMetric = "&units=metric";

// Current
const apiCurrent = "https://api.openweathermap.org/data/2.5/weather?q=";

// Forecast
// const apiForecast = "https://api.openweathermap.org/data/2.5/onecall?";

export const apiUrlCurrent = `${apiCurrent}London${apiMetric}&${apiKey}`;
