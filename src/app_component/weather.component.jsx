import React from "react";
import "./weather.style.css";

const Weather = props => {
  return (
    <div className="container">
      <div className="Card">
        <h1 className="font-1">{props.cityname}</h1>
        <h3 className="icon">
          <i className={`wi ${props.weatherIcon}`} />
        </h3>

        {/* Get Celsius */}
        {props.temp_celsius ? (
          <h1 className="font-2">{props.temp_celsius}&deg;</h1>
        ) : null}

        {/* show max and min temp */}
        <h1 className="font-3">{maxminTemp(props.temp_min, props.temp_max)}</h1>

        {/* Weather description */}
        <h4 className="font-3">
          {props.description.charAt(0).toUpperCase() +
            props.description.slice(1)}
        </h4>
      </div>
    </div>
  );
};

export default Weather;

function maxminTemp(min, max) {
  if (max && min) {
    return (
      <div>
        <h3>
          <span className="temp-1">{min}&deg;</span>
          <span className="temp-2">{max}&deg;</span>
        </h3>
      </div>
    );
  }
}