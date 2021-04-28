import React, { useState } from "react";

export default function WeatherForecast() {
  return (
    <div className="row">
      <div className="col">
        <div className="card shadow-sm">
          <div className="card-body text-center">
            <p className="card-title">Fri</p>
            <i className="fas fa-cloud-sun"></i>
            <p className="card-text text-black-50">10° | 12°</p>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card shadow-sm">
          <div className="card-body text-center">
            <p className="card-title">Sa</p>
            <i className="fas fa-cloud-sun"></i>
            <p className="card-text text-black-50">10° | 12°</p>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card shadow-sm">
          <div className="card-body text-center">
            <p className="card-title">Su</p>
            <i className="fas fa-cloud-sun"></i>
            <p className="card-text text-black-50">10° | 12°</p>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card shadow-sm">
          <div className="card-body text-center">
            <p className="card-title">Mo</p>
            <i className="fas fa-cloud-sun"></i>
            <p className="card-text text-black-50">10° | 12°</p>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card shadow-sm">
          <div className="card-body text-center">
            <p className="card-title">Tue</p>
            <i className="fas fa-cloud-sun"></i>
            <p className="card-text text-black-50">10° | 12°</p>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card shadow-sm">
          <div className="card-body text-center">
            <p className="card-title">Wed</p>
            <i className="fas fa-cloud-sun"></i>
            <p className="card-text text-black-50">10° | 12°</p>
          </div>
        </div>
      </div>
    </div>
  );
}
