import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

type Coords = {
  lat: number;
  long: number;
};

function useGeolocation() {
  const [cordinates, setCords] = useState<Coords | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();

  function reset() {
    setCords(null);
    searchParams.delete("lat");
    searchParams.delete("long");
    setSearchParams(searchParams);
  }

  // first time
  useEffect(() => {
    if (cordinates) return;
    const lat = searchParams.get("lat");
    const long = searchParams.get("long");
    if (lat && long) {
      setCords({ lat, long });
      return;
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude: lat, longitude: long } = pos.coords;
          setCords({ lat, long });
          searchParams.set("lat", lat + "");
          searchParams.set("long", lat + "");
          setSearchParams(searchParams);
        },
        (error) => {
          console.log("error getting your position ! " + error.message);
          throw new Error(error.message);
        }
      );
    }
  }, [searchParams, setSearchParams, cordinates]);

  return { cordinates, reset };
}

export default useGeolocation;
