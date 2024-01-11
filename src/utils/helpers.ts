function formatDate(date: Date) {
  return `${date.toDateString()} | ${date.toLocaleString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  })}`;
}

function getUTCtime(shift: number, time = new Date()) {
  const currTime = time;
  const utcTime = new Date(
    currTime.toLocaleString("en-US", {
      timeZone: "UTC",
    })
  );
  const newTime = new Date(+utcTime + 1000 * shift);

  return newTime;
}

function isDay(weather: any) {
  const currTime = getUTCtime(weather.timezone);
  const sunRiseTime = getUTCtime(
    weather.timezone,
    new Date(weather.sys.sunrise * 1000)
  );
  const sunSetTime = getUTCtime(
    weather.timezone,
    new Date(weather.sys.sunset * 1000)
  );
  return +currTime > +sunRiseTime && +currTime < +sunSetTime;
}

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function getWeekday(date: Date) {
  const dayIndex = date.getDay();
  return weekdays[dayIndex];
}

export { getUTCtime, formatDate, getWeekday, isDay };
