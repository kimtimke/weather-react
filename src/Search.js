import React from "react";
import axios from "axios";

export default function Weather(props) {
  function showTemperature(response) {
    alert(`Weather in ${response.data.name} is ${response.data.main.temp}`);
  }
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=6950fb0a1f88f981260fcceba2a5d047&units=metric`;
  axios.get(url).then(showTemperature);
  return <h2>Hello Mr Timke</h2>;
}
