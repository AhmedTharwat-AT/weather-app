import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
import useGeolocation from "./useGeolocation";
import { getWeather } from "../services/weatherApi";
import { useEffect } from "react";

function useWeather() {
  const [searchParams, setSearchParams] = useSearchParams();
  const cordinates = useGeolocation();

  const { data: { data } = {}, isLoading } = useQuery(
    ["weather", `lat=${cordinates?.lat}`, `long=${cordinates?.long}`],
    () => getWeather(cordinates),
    {
      enabled: cordinates != null,
    }
  );

  useEffect(() => {
    if (!cordinates) return;
    searchParams.set("lat", cordinates.lat + "");
    searchParams.set("long", cordinates.lat + "");
    setSearchParams(searchParams);
  }, [cordinates, searchParams, setSearchParams]);

  return { data, isLoading };
}

export default useWeather;
