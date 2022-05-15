export function timestampToHour(timestamp) {
  const milliseconds = timestamp * 1000;
  const dateObject = new Date(milliseconds);

  const hour = dateObject.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: false
  });
  
  return hour;
};

export function timestampToShortDate(timestamp) {
  const miliseconds = timestamp * 1000;
  const dateObject = new Date(miliseconds);
  const date = dateObject.toLocaleString('en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  });

  return date;
};

export function timestampToLongDate(timestamp) {
  const milliseconds = timestamp * 1000;
  const entryDateTime = new Date(milliseconds);

  const years = entryDateTime.getFullYear();
  const months = entryDateTime.getMonth();
  const days = entryDateTime.getDate();

  const entryDate = new Date(years, months, days);

  return entryDate.toDateString();
};

export function longDateToShortDate(longDate) {
  const dateObject = new Date(longDate);
  const date = dateObject.toLocaleString('en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  });

  return date;
};