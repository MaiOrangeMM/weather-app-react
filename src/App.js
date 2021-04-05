import Weather from "./Weather";

import bootstrap from "bootstrap";
import "@popperjs/core/dist/esm/popper";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import "./App.css";

import logo from "./logo.svg";
import { library } from "@fortawesome/fontawesome-svg-core";

//library.add(faCoffee);

function App() {
  return <Weather />;
}

export default App;
