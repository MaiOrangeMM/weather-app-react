import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <div className="container d-flex align-items-center justify-content-center pt-2 pb-2">
      <h2>Footer</h2>
      <FontAwesomeIcon icon="coffee" />
      <input className="btn btn-danger" type="submit" />
    </div>
  );
}
