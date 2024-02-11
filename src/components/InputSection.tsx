import { useState, useEffect } from "react";
import { StyledCard } from "./StyledCard";

type WeatherProps = {
  main: {
    temp: number;
  };
};

export const InputSection = () => {
  const [weather, setWeather] = useState<WeatherProps | undefined>();

  const cityName = "Zlin";
  const apiKey = import.meta.env.VITE_API_KEY;
  const baseUrl = import.meta.env.VITE_BASE_URL;

  const url = `${baseUrl}?q=${cityName}&appid=${apiKey}`;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const weatherData = (await response.json()) as WeatherProps;
      setWeather(weatherData);
    };

    fetchData();
  }, []);

  const tempCelsius = weather
    ? `${(weather.main.temp - 273.15).toFixed(2)}`
    : "";
    const now = new Date();

    const actualYear = now.getFullYear();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    const dayOfWeek = now.getDay();

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const monthName = months[month - 1]; 
    const weekdayName = weekdays[dayOfWeek];

  return (
    <div className="m-20">
      <div className="flex items-center justify-center gap-5">
        <input
          type="text"
          placeholder="Search"
          className="bg-slate-200 rounded"
        />
        <button>Search</button>
      </div>
      <div className="flex justify-center mt-10">
        <div>
          <StyledCard
            city={cityName}
            tempC={tempCelsius}
            weekDay={weekdayName}
            month={monthName}
            dateDay={date}
            year={actualYear}
          />
        </div>
      </div>
    </div>
  );
};
