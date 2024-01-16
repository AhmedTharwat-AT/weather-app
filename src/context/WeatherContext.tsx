import { createContext, useContext, useEffect } from "react";
import { useQuery } from "react-query";
import useGeolocation from "../hooks/useGeolocation";
import { getWeather, getWeatherForecast } from "../services/weatherApi";
import { isDay } from "../utils/helpers";

type Props = {
  children: JSX.Element[] | JSX.Element;
};

const WeatherContext = createContext<any>(null);

function WeatherProvider({ children }: Props) {
  const { cordinates, searchParams, reset } = useGeolocation();
  const lat = Number(searchParams.get("lat"));
  const long = Number(searchParams.get("long"));
  const coords = lat && long ? { lat, long } : cordinates;

  const { data: { data: weather } = {}, isLoading: isLoadingWeather } =
    useQuery(
      ["weather", `lat=${coords?.lat}`, `long=${coords?.long}`],
      () => getWeather(coords),
      {
        enabled: coords != null,
      }
    );

  const { data: { data: forecast } = {}, isLoading: isLoadingForecast } =
    useQuery(
      ["forecast", `lat=${coords?.lat}`, `long=${coords?.long}`],
      () => getWeatherForecast(coords),
      {
        enabled: coords != null,
      }
    );

  //change theme
  useEffect(() => {
    if (!weather) return;

    const isday = isDay(weather);
    isday
      ? document.documentElement.classList.add("is-day")
      : document.documentElement.classList.remove("is-day");
  }, [weather]);

  return (
    <WeatherContext.Provider
      value={{ forecast, weather, isLoadingWeather, isLoadingForecast, reset }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useWeatherContext() {
  const context = useContext(WeatherContext);
  const { forecast, weather, isLoadingWeather, isLoadingForecast, reset } =
    context || {};
  return { forecast, weather, isLoadingWeather, isLoadingForecast, reset };
}

export default WeatherProvider;
