import { useState, useEffect } from "react";
import { styled } from "styled-components";
import { getUTCtime } from "../utils/helpers";
import { useWeatherContext } from "../context/WeatherContext";

import Heading from "./Heading";
import Search from "./Search";

const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: start;
    gap: 8px;
  }
`;

const TimeDate = styled.p`
  font-size: 1.2rem;
  letter-spacing: 1px;
  padding-top: 2px;
`;

function Header() {
  const { weather, isLoadingWeather } = useWeatherContext();
  const [time, setTime] = useState<null | string>(null);
  const loading = isLoadingWeather || !weather;

  // rerender every minute to sync timer
  useEffect(() => {
    if (loading) return;
    setTime(getUTCtime(weather.timezone));
    const timer = setInterval(() => {
      setTime(getUTCtime(weather.timezone));
    }, 1000 * 60);

    return () => clearInterval(timer);
  }, [loading, weather]);

  if (loading) return <h1>Loading ....</h1>;

  return (
    <HeaderStyle>
      <div>
        <Heading>{weather.name}</Heading>
        <TimeDate>{time}</TimeDate>
      </div>
      <Search />
    </HeaderStyle>
  );
}

export default Header;
