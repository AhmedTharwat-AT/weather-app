import { useState, useEffect } from "react";
import { styled } from "styled-components";
import { formatDate, getUTCtime } from "../utils/helpers";
import { useWeatherContext } from "../context/WeatherContext";

import { FaLocationCrosshairs } from "react-icons/fa6";
import Heading from "./Heading";
import Search from "./Search";

const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: start;
    gap: 18px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  min-width: 50%;
  width: 100%;
  max-width: 400px;

  @media (max-width: 768px) {
    width: 90%;
    margin-inline: auto;
    max-width: 90%;
  }
  @media (max-width: 650px) {
    width: 100%;
    max-width: 500px;
  }
`;

const TimeDate = styled.p`
  font-size: 1.2rem;
  letter-spacing: 1px;
  padding-top: 2px;
`;

const Button = styled(FaLocationCrosshairs)`
  background-color: var(--color-gray-200);
  color: var(--color-gray-800);
  min-height: 100%;
  font-size: 4.3rem;
  padding: 10px;
  border-radius: var(--border-radius-lg);
  cursor: pointer;

  &:hover {
    background-color: var(--color-gray-800);
    color: var(--color-gray-200);
  }
`;

function Header() {
  const { weather, isLoadingWeather, reset } = useWeatherContext();
  const [time, setTime] = useState<null | string>(null);
  const loading = isLoadingWeather || !weather;

  // rerender every minute to sync timer
  useEffect(() => {
    if (loading) return;
    setTime(formatDate(getUTCtime(weather.timezone)));
    const timer = setInterval(() => {
      setTime(formatDate(getUTCtime(weather.timezone)));
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
      <Wrapper>
        <Search />
        <Button onClick={reset} />
      </Wrapper>
    </HeaderStyle>
  );
}

export default Header;
