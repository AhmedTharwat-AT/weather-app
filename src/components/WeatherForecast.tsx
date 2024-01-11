import { styled } from "styled-components";
import { useWeatherContext } from "../context/WeatherContext";

import ForecastItem from "./ForecastItem";

const ForecastStyle = styled.section`
  margin-top: 15px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 22px;
  padding: 20px;

  /* glass effect */
  background-color: var(--color-glass-section);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
`;

function WeatherForecast() {
  const { forecast, isLoadingForecast } = useWeatherContext();
  let items: any[] = [];

  if (forecast) {
    items = [
      forecast.list[7],
      forecast.list[15],
      forecast.list[23],
      forecast.list[31],
      forecast.list[39],
    ];
  }
  console.log(items);

  if (isLoadingForecast || !forecast) return <h1>Loading..</h1>;

  return (
    <ForecastStyle>
      {items.map((item) => (
        <ForecastItem key={item.dt} item={item} />
      ))}
    </ForecastStyle>
  );
}

export default WeatherForecast;
