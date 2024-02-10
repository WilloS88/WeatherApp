import { useState, useEffect } from "react"

type WeatherProps = {
  day: string
  tempC: string
  tempF: string
}

export const InputSection = () => {
  const [weather, setWeather] = useState<WeatherProps[]>([])

  const cityName = "Zlín"
  const apiKey = import.meta.env.VITE_API_KEY
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url)
      const weatherData = (await response.json()) as WeatherProps[]
      setWeather(weatherData)
      console.log(weatherData);
      console.log(weatherData.main.humidity);
      
    }

    fetchData()
  }, [])

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
      <div>
        
      </div>
    </div>
  )
}
