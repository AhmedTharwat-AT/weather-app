import { createContext, useContext } from "react";
import { useQuery } from "react-query";
import useGeolocation from "../hooks/useGeolocation";
import { getWeather, getWeatherForecast } from "../services/weatherApi";

type Props = {
  children: JSX.Element[] | JSX.Element;
};

const WeatherContext = createContext<any>(null);

function WeatherProvider({ children }: Props) {
  const { cordinates } = useGeolocation();

  const { data: { data: weather } = {}, isLoading: isLoadingWeather } =
    useQuery(
      ["weather", `lat=${cordinates?.lat}`, `long=${cordinates?.long}`],
      () => getWeather(cordinates),
      {
        enabled: cordinates != null,
      }
    );

  const { data: { data: forecast } = {}, isLoading: isLoadingForecast } =
    useQuery(
      ["forecast", `lat=${cordinates?.lat}`, `long=${cordinates?.long}`],
      () => getWeatherForecast(cordinates),
      {
        enabled: cordinates != null,
      }
    );

  return (
    <WeatherContext.Provider
      value={{ forecast, weather, isLoadingWeather, isLoadingForecast }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

export function useWeatherContext() {
  const context = useContext(WeatherContext);
  const { forecast, weather, isLoadingWeather, isLoadingForecast } = context;
  return { forecast, weather, isLoadingWeather, isLoadingForecast };
}

export default WeatherProvider;
