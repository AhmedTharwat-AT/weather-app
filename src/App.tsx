import { useEffect, useState } from "react";
const apikey = import.meta.env.VITE_API_KEY;

function App() {
  const [cordinates, setCords] = useState<{ lat: number; long: number }>();

  useEffect(() => {
    async function displayMap() {
      const res = await fetch(
        `https://tile.openweathermap.org/map/wind_new/8/1/200.png?appid=${apikey}`
      );
      const data = await res.json();
      const img = URL.createObjectURL(data);
      console.log(img);
    }
    displayMap();
  }, []);

  // useEffect(() => {
  //   //   // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition((pos) => {
  //       console.log(pos.coords);
  //       const { latitude: lat, longitude: long } = pos.coords;

  //       setCords({ lat, long });
  //       async function getWeather() {
  //         const res = await fetch(
  //           `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${apikey}`
  //         );
  //         const data = await res.json();
  //         console.log(data);
  //       }
  //       //       // getWeather();
  //     });
  //   }
  // }, []);

  return <h1>{cordinates && cordinates.lat}</h1>;
}

export default App;
