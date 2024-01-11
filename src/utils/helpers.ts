function formatDate(date: Date) {
  return `${date.toDateString()} | ${date.toLocaleString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  })}`;
}

function getUTCtime(shift: number) {
  const currTime = new Date();
  const utcTime = new Date(
    currTime.toLocaleString("en-US", {
      timeZone: "UTC",
    })
  );
  const newTime = new Date(+utcTime + 1000 * shift);

  return formatDate(newTime);
}

function isDay(shift: number) {
  const currTime = getUTCtime(shift);
  return currTime.includes("AM") ? false : true;
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
