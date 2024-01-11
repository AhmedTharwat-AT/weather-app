import { styled } from "styled-components";

import Heading from "./Heading";
import { getUTCtime } from "../utils/helpers";
import { useWeatherContext } from "../context/WeatherContext";
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

  if (isLoadingWeather || !weather) return <h1>Loading ....</h1>;

  return (
    <HeaderStyle>
      <div>
        <Heading>{weather.name}</Heading>
        <TimeDate>{getUTCtime(weather.timezone)}</TimeDate>
      </div>
      <Search />
    </HeaderStyle>
  );
}

export default Header;
