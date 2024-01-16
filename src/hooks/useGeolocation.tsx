import { useEffect, useState } from "react";
import { useErrorBoundary } from "react-error-boundary";
import { useSearchParams } from "react-router-dom";

type Coords = {
  lat: number;
  long: number;
};

function useGeolocation() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [cordinates, setCords] = useState<Coords | null>(null);
  const { showBoundary } = useErrorBoundary();

  function reset() {
    searchParams.delete("lat");
    searchParams.delete("long");
    setCords(null);
  }

  // first time
  useEffect(() => {
    if (cordinates) return;

    //initial open with url including lat & long
    const lat = Number(searchParams.get("lat"));
    const long = Number(searchParams.get("long"));
    if (lat && long) {
      setCords({ lat, long });
      return;
    }

    //initial open with empty url
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude: lat, longitude: long } = pos.coords;
          setCords({ lat, long });
          searchParams.set("lat", lat + "");
          searchParams.set("long", long + "");
          setSearchParams(searchParams);
        },
        (error) => {
          console.log("error getting your position ! " + error.message);
          showBoundary(error);
          throw new Error(error.message);
        }
      );
    } else {
      throw new Error("your device doesnt support location function !");
    }
  }, [cordinates, searchParams, setSearchParams, showBoundary]);

  return { cordinates, searchParams, reset };
}

export default useGeolocation;
