import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="container d-flex align-items-center justify-content-center pt-2 pb-2">
      <a
        className="h6 text-decoration-none text-dark"
        href="https://github.com/MayElectric/weather-app"
      >
        <FontAwesomeIcon icon={faGithubSquare} size="2x" />
      </a>
    </div>
  );
}
