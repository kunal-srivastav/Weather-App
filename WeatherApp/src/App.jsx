import React, { useEffect, useState } from 'react'
import SearchBox from './Component/SearchBox'
import Weather from './Component/Weather'


function App() {

  const [searchValue ,setSearchValue] = useState("Delhi");

  const [currWeather , setCurrWeather] = useState({});

  const getWeatherData = async() => {
    try {
      let url =  `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=7c83a5227d2ea0789655ecba68d8e5b9`
      
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      const { temp,humidity,pressure } = (data.main);
      const {name} = data;
      const {country ,sunset} = data.sys;
      const {main: weatherMood} = data.weather[0];
      const {speed} = data.wind;
      
      const myWeatherData = {
        temp ,humidity ,pressure ,name , country , speed, sunset , weatherMood
      }
      setCurrWeather(myWeatherData);

    } catch (error) {
      console.log(error);
    }
    setSearchValue("");
  }

  useEffect(() => {
    getWeatherData();
  }
,[])

  return (
    <>
    <SearchBox searchValue={searchValue} getWeatherData={getWeatherData} setSearchValue={setSearchValue} />
    <Weather currWeather={currWeather} />
    </>
  )
}

export default App