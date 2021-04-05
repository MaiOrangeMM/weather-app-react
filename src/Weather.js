import React from "react";

import BoxOverview from "./BoxOverview";
import BoxDetails from "./BoxDetails";
import Footer from "./Footer";

function Weather() {
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
