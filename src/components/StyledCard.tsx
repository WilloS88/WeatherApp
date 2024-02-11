type Props = {
  city: string;
  tempC: string;
  weekDay: string;
  month: string;
  dateDay: number;
  year: number;
};

export const StyledCard = ({
  city,
  tempC,
  weekDay,
  month,
  dateDay,
  year,
}: Props) => {
  return (
    <div className="flex-col">
      <div>
        <h2>{city}</h2>
        <p>Temperature: {tempC}°C</p>
        <p>
          {weekDay}, {month} {dateDay}, {year}
        </p>
        <p></p>
      </div>
    </div>
  );
};
