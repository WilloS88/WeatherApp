import { useState, useEffect } from 'react';

type DateTime = {
  city: string;
}

export const DateTime: React.FC<DateTime> = ({ city }) => {
  const [dateTime, setDateTime] = useState<string>('Loading...');

  useEffect(() => {
    const cityFormatted = city.replace(/\s+/g, '_').toLowerCase();

    fetch(`http://worldtimeapi.org/api/timezone/Etc/GMT`)
      .then(response => response.json())
      .then(data => {
        const dateTimeString = new Date(data.datetime).toLocaleString();
        setDateTime(dateTimeString);
      })
      .catch(err => {
        console.error('Failed to fetch time data:', err);
        setDateTime('Failed to load time');
      });
  }, [city]);

  return (
    <div>
      <h2>{city}</h2>
      <p>{dateTime}</p>
    </div>
  );
};
