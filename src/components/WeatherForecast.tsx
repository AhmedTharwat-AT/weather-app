import { styled } from "styled-components";
import { useWeatherContext } from "../context/WeatherContext";

import ForecastItem from "./ForecastItem";
import { LoaderOne } from "./Loader";

const ForecastStyle = styled.section`
  margin-top: 0px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 22px;
  row-gap: 30px;
  padding: 20px;
  min-height: 170px;

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

  return (
    <ForecastStyle>
      {isLoadingForecast || !forecast ? (
        <LoaderOne />
      ) : (
        items.map((item) => <ForecastItem key={item.dt} item={item} />)
      )}
    </ForecastStyle>
  );
}

export default WeatherForecast;
