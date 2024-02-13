import { useState } from "react";
import { StyledCard } from "./StyledCard";

type WeatherProps = {
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  name: string;
};

export const InputSection = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [weather, setWeather] = useState<WeatherProps | undefined>();
  const [modal, setModal] = useState<string>("");

  const apiKey = import.meta.env.VITE_API_KEY;
  const baseUrl = import.meta.env.VITE_BASE_URL;

  const handleSearchClick = async () => {
    if (!inputValue.trim()) {
      setModal("Please enter a city name.");
      return;
    }
    
    const url = `${baseUrl}?q=${inputValue}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }
      const weatherData = (await response.json()) as WeatherProps;
      
      // Here, check if the API's returned city name matches the input value.
      // This might be simplified depending on the API's behavior and how it handles city names.
      if (weatherData.name.toLowerCase() === inputValue.trim().toLowerCase()) {
        setWeather(weatherData);
        setModal(""); // Reset/hide the modal if the city names match
      } else {
        setModal("Please enter a correct city name.");
      }
    } catch (error) {
      console.error(error);
      setModal("Failed to fetch weather data");
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const tempCelsius = weather ? `${weather.main.temp.toFixed(2)}` : "";

  return (
    <div className="m-20">
      <div className="flex items-center justify-center gap-5">
        <input
          type="text"
          placeholder="Enter city name"
          className="bg-slate-200 rounded px-2 py-1"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button
          onClick={handleSearchClick}
          className="bg-slate-200 rounded px-2 py-1"
        >
          Search
        </button>
      </div>
      {modal && <div className="text-red-500 mt-2">{modal}</div>}
      <div className="flex justify-center mt-10">
        {weather && (
          <StyledCard
            city={weather.name}
            tempC={tempCelsius}
            humidity={weather.main.humidity}
            windSpeed={weather.wind.speed}
          />
        )}
      </div>
    </div>
  );
};
