let apikey = "";

if (import.meta.env) {
  apikey = import.meta.env.VITE_API_KEY;
  console.log("one", import.meta.env);
} else {
  apikey = process.env.VITE_API_KEY;
  console.log("two", process.env);
}

type Coords = {
  lat: number;
  long: number;
};

async function getWeather(coords: Coords | null) {
  if (!coords || !coords.lat || !coords.long) return;

  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.long}&appid=${apikey}&units=metric`
  );

  if (!res.ok) {
    throw new Error("No data was found for these coordinates !");
  }

  const data = await res.json();
  return { data };
}

// https://openweathermap.org/img/wn/10d@2x.png
async function getWeatherIcon(name: string, size: string) {
  const res = await fetch(
    `https://openweathermap.org/img/wn/${name}@${size}.png`
  );

  if (!res.ok) {
    throw new Error("Couldnt fetch img icon !");
  }

  const blob = await res.blob();
  const img = URL.createObjectURL(blob);

  return { img };
}

async function getWeatherForecast(coords: Coords | null) {
  if (!coords || !coords.lat || !coords.long) return;
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${coords.lat}&lon=${coords.long}&appid=${apikey}&units=metric`
  );

  if (!res.ok) {
    throw new Error("No data was found for these coordinates !");
  }

  const data = await res.json();
  return { data };
}

//geocoding
async function getCityCoords(query: string) {
  if (!query) return;
  const res = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=1&appid=${apikey}`
  );

  if (!res.ok) {
    throw new Error("No city was found for this query !");
  }

  const data = await res.json();
  return { data };
}

export { getWeather, getWeatherIcon, getWeatherForecast, getCityCoords };
