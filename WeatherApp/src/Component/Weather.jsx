import React, { useEffect, useState } from "react";
import { FaCloudMoon, FaWind } from "react-icons/fa";
import { WiSunset, WiHumidity } from "react-icons/wi";
import { TiWeatherDownpour } from "react-icons/ti";

function Weather({ currWeather }) {

  const { weatherMood } = currWeather;

  const [weatherState, setWeatherState] = useState("");

  let sec = currWeather.sunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()}:${date.getMinutes()}`;

  useEffect(() => {
    if (weatherMood) {
      switch (weatherMood) {
        case "Clouds":
          setWeatherState("clouds");
          break;
        case "Sun":
          setWeatherState("sun");
          break;
        case "haze":
          setWeatherState("cloud-fog");
          break;
        case "Mist":
          setWeatherState("wind");
          break;
        case "Clear":
          setWeatherState("brightness-high");
          break;
        case "Rain":
          setWeatherState("cloud-rain");
          break;

        default:
          setWeatherState("clouds");
          break;
      }
    }
  }, [weatherMood]);

  return (
    <div className="container text-center mt-3 py-4">
      <div className="  w-100 h-25">
        <i className={` bg-transparent bi bi-${weatherState} h1 `}></i>
      </div>
      <div>
        <div className="d-flex text-light p-2">
          <div className="d-flex align-items-center rounded-pill w-75" style={{backgroundColor : "#27A5DB"}}>
            <h2>{currWeather.temp}&deg;</h2>
            <p className="m-3 fs-5">
              {weatherMood} <br />
              {currWeather.name} ,{currWeather.country}
            </p>
          </div>
          <div className="p-2 text-dark rounded-pill" style={{backgroundColor : "#FEFEFE"}} >
            <p className="fs-6 mt-3"> {new Date().toLocaleString()}</p>
          </div>
        </div>

        <div className="d-flex justify-content-evenly flex-row mb-3">
          <div className="p-2">
            <WiSunset size={25} color="#27A5DB" /> {timeStr} <br /> Sunset
          </div>
          <div className="p-2">
            <WiHumidity size={25} color="#27A5DB" /> {currWeather.humidity} <br />{" "}
            Humidity
          </div>
          <div className="p-2">
            <TiWeatherDownpour size={20} color="#27A5DB" /> {currWeather.pressure}{" "}
            <br />
            Pressure
          </div>
          <div className="p-2">
            <FaWind size={16} color="#27A5DB" /> {currWeather.wind} <br />
            4.79
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Weather;
