export const data = {
  name: 'London',
  sys: { country: 'GB' },
  dt: 1648663366, // unix, UTC
  weather: [
    {
      description: 'broken clouds',
      icon: '04d',
    }
  ],
  main: {
    temp: 8.05, // Celsius
    feels_like: 5.31, // Celsius
    temp_min: 5.9, // Celsius
    temp_max: 9.64, // Celsius
    pressure: 1004, // hPa
    humidity: 78, // %
  },
  wind: {
    speed: 4.63, // meters/second
    degree: 350, // degrees (meteorological - from North, clockwise)
  },
  visibility: 10000, // meters (max 10000)
  clouds: 75, // %
};