import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { LuWind } from "react-icons/lu";
import { WiHumidity } from "react-icons/wi";
import styles from "./Weather.module.css";

export default function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState();
  const [error, setError] = useState("");
  const API_KEY = "91ea4def39355c63a98365d31c7b7268";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

  function handleOnChange(e) {
    setCity(e.target.value);
  }

  async function fetchData() {
    try {
      let res = await fetch(url);
      let output = await res.json();
      if (res.ok) {
        setWeather(output);
        setError("");
      } else {
        setError("No data found. Enter valid City name");
      }
    } catch (error) {}
  }

  return (
    <div className={styles.container}>
      <div className={styles.city}>
        <input
          type="text"
          value={city}
          onChange={handleOnChange}
          placeholder="Enter any city name.."
        />
        <button onClick={() => fetchData()}>
          <FaSearch />
        </button>
      </div>

      {error && <p className={styles.errorMessage}>{error}</p>}

      {weather && weather.weather && (
        <div className={styles.Weathercontent}>
          <div className={styles.weatherImage}>
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt="not found"
            />
          </div>

          <h3 className={styles.desc}>{weather.weather[0].description}</h3>

          <div className={styles.weatherTemp}>
            {weather.main.temp}
            <span>&deg;C</span>
          </div>

          <div className={styles.weatherCity}>
            <div className={styles.locIcon}>
              <FaLocationDot />
            </div>
            <p>
              {weather.name}, <span>{weather.sys.country}</span>
            </p>
          </div>

          <div className={styles.weatherStats}>
            <div className={styles.winds}>
              <div className={styles.windIcon}>
                <LuWind />
              </div>
              <h3>
                {weather.wind.speed}
                <span> Km/h</span>
              </h3>
              <h3 className={styles.ws}>WIND SPEED</h3>
            </div>

            <div className={styles.humidity}>
              <div className={styles.humidityIcon}>
                <WiHumidity />
              </div>
              <h3>
                {weather.main.humidity}
                <span> %</span>
              </h3>
              <h3 className={styles.hy}>HUMIDITY</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
