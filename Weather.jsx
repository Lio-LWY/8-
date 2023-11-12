import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const API_KEY = "275422928b3c3d833922e29310f42cf5";
const url = "https://api.openweathermap.org/data/2.5/weather";

function Weather(){
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState(null);

  const handleInputChange = (e) => {
    setLocation(e.target.value);
  };

  const handleKeyPress = async (e) => {
    if (e.key === "Enter") {
      try {
        const response = await axios.get(url, {
          params: {
            q: location,
            appid: API_KEY,
          },
        });
        setWeather(response.data);
      } catch (error) {
        console.error("Failed:", error);
      }
    }
  };

  return (
    <div style={Container}>
      <div style={InputBox}
        type="text"
        placeholder="Enter a city name."
        onChange={handleInputChange}
        // onKeyPress={handleKeyPress}
      />
      {/* {weather && (
        <div style={WeatherBox}>
          <div style={City}>{weather.name}</div>
          <div style={Temp}>{Math.round((weather.main.temp - 273.15) * 10) / 10} ℃</div>
          <div style={WeatherStatus}>{weather.weather[0].main}</div>
        </div>
      )} */}
    </div>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const InputBox = styled.input`
  width: 300px;
  height: 70px;
  border-radius: 15px;
  padding: 5px 20px;
  font-size: 15px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
`;

const WeatherBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 200px;
  height: 200px;
  margin-top: 50px;
  border: 2px solid black;
  border-radius: 20px;
  padding: 0 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const City = styled.p`
  display: flex;
  margin: 10px;
  font-size: 30px;
`;

const WeatherStatus = styled.p`
  display: flex;
  flex-direction: row-reverse;
  margin: 10px;
  font-size: 30px;
`;

const Temp = styled.p`
  display: flex;
  margin: 5px;
  font-size: 75px;
`;

export default Weather;