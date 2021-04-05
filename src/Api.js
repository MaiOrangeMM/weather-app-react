// API
const apiKey = "&appid=ea446638ab71304f56de134b4323492c";
const apiCurrent = "https://api.openweathermap.org/data/2.5/weather?q=";
// const apiForecast = "https://api.openweathermap.org/data/2.5/onecall?";
const apiMetric = "&units=metric";

export const apiUrlCurrent = `${apiCurrent}London${apiMetric}&${apiKey}`;
