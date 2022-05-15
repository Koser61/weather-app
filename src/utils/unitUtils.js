export function parseMetresToString(metres) {
  if(metres >= 1000) {
    const kilometers = metres / 1000;
    return `${Math.round(kilometers)}km`;
  } else {
    return `${Math.round(metres)}m`;
  }
};

export function parseCelsius(number) {
  return `${Math.round(number)}°C`;
};

export function parseWind(speed) {
  return `${Math.round(speed)}m/s`;
};

export function toPercentage(number) {
  return `${Math.round(number * 100)}%`;
};