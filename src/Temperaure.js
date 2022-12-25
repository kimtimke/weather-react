import React from "react";
import "./Temperature.css";

export default function Temperature() {
  return (
    <div className="Temperature">
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="Cloudy"
              class="float-left"
            />
            <div class="float-left">
              <strong id="temperature"> 20 </strong>
              <span class="units">°C</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>
              <i class="fa-solid fa-droplet"></i> Humidity:
              <span id="humidity"></span>%
            </li>
            <li>
              <i class="fa-solid fa-wind"></i> Wind:
              <span id="wind"></span> km/h
            </li>
          </ul>
        </div>
      </div>
      <div className="weather-forecast" id="forecast">
        {" "}
      </div>
    </div>
  );
}
