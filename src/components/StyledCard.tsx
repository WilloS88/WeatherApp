import LocationIcon from "../img/location-icon.svg";

type Props = {
  city: string;
  tempC: string;
  humidity: number;
  windSpeed: number;
};

export const StyledCard: React.FC<Props> = ({
  city,
  tempC,
  humidity,
  windSpeed,
}) => {
  return (
    <div className="flex-col bg-slate-500 p-5 rounded">
      <div className="flex-col gap-8 p-2">
        <div className="flex items-center justify-center gap-5 my-2">
          <img src={LocationIcon} alt="Location" />
          <h1>Location</h1>
        </div>
        <div>
          <h2>{city}</h2>
          <img src="" alt="" />
        </div>
        <div className="my-2">Temperature: {tempC} °C</div>
        <div className="my-2">Humidity: {humidity} %</div>
        <div className="my-2">Wind Speed: {windSpeed} km/h</div>
      </div>
    </div>
  );
};
