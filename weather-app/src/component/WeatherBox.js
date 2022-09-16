import React from "react";

const WeatherBox = ({ weather }) => {
  console.log("weather", weather);
  return (
    <div className="weather-box">
      <div>{weather?.name}</div>{" "}
      {/*weather && weather.name > 조건부 랜더링도 가능*/}
      <h2>
        {Math.floor(weather?.main.temp)} °C/
        {Math.floor(weather?.main.temp * 1.8 + 32)}°F
      </h2>
      <h3>{weather?.weather[0].description}</h3>
    </div>
  );
};

export default WeatherBox;
