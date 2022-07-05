import React from "react";
import PropTypes from "prop-types";
import "../styles/ForecastDetails.css";

function ForecastDetails({ forecast }) {
  const { date, humidity, temperature, wind } = forecast;

  const formattedDate = new Date(date).toDateString();

  return (
    <div className="forecast-details">
      <div className="forecast-summary__date">{formattedDate}</div>
      <div className="forecast-summary__maxTemperature">
        Max: {temperature.max}&deg;C
      </div>
      <div className="forecast-summary__minTemperature">
        Min: {temperature.min}&deg;C
      </div>
      <div className="forecast-summary__humidity">Humidity: {humidity}</div>
      <div className="forecast-summary__wind_speed">Speed: {wind.speed}</div>
      <div className="forecast-summary__wind_direction">
        Direction: {wind.direction}
      </div>
    </div>
  );
}

export default ForecastDetails;

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number,
    temperature: PropTypes.shape({
      min: PropTypes.number,
      max: PropTypes.number,
    }),
    wind: PropTypes.shape({
      speed: PropTypes.number,
      direction: PropTypes.string,
    }),
    humidity: PropTypes.number,
    description: PropTypes.string,
    icon: PropTypes.string,
  }).isRequired,
};
