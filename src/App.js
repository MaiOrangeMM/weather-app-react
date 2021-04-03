import Footer from "./Footer";
import bootstrap from "bootstrap";
import "@popperjs/core/dist/esm/popper";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import "./App.css";

import logo from "./logo.svg";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fab,
  faFacebookSquare,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCoffee,
  faThermometerHalf,
  faWind,
} from "@fortawesome/free-solid-svg-icons";

//library.add(faWind);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>hi</h1>
      </header>
      <Footer />
    </div>
  );
}

export default App;
