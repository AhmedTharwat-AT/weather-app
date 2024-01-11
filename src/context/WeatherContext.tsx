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
  const { cordinates, searchParams } = useGeolocation();
  const lat = Number(searchParams.get("lat"));
  const long = Number(searchParams.get("long"));
  const coords = lat && long ? { lat, long } : cordinates;

  console.log(coords);

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
    const isday = isDay(weather.timezone);
    isday
      ? document.documentElement.classList.add("is-day")
      : document.documentElement.classList.remove("is-day");
  }, [weather]);

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
