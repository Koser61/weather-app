export const data = {
  cod: '200',
  message: 0,
  cnt: 40, // Number of items in list
  list: [ // 5 day forecast - entry every 3 hours (8 a day)
    {
      dt: 1647345600,
      main: {
        temp: 13.73,
        feels_like: 12.78,
        temp_min: 13.59,
        temp_max: 13.73,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 1018,
        humidity: 62,
        temp_kf: 0.14
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d'
        }
      ],
      clouds: {
        all: 85
      },
      wind: {
        speed: 3.25,
        deg: 134,
        gust: 4.45
      },
      visibility: 10000,
      pop: 0, // Propability of precipitation: 0 - 1 (0 = 0%, 1 = 100%)
      sys: {
        pod: 'd'
      },
      dt_txt: '2022-03-15 12:00:00'
    },
    {
      dt: 1647356400,
      main: {
        temp: 13.56,
        feels_like: 12.62,
        temp_min: 13.23,
        temp_max: 13.56,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 1017,
        humidity: 63,
        temp_kf: 0.33
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d'
        }
      ],
      clouds: {
        all: 90
      },
      wind: {
        speed: 3.34,
        deg: 172,
        gust: 4.03
      },
      visibility: 10000,
      pop: 0, // Propability of precipitation: 0 - 1 (0 = 0%, 1 = 100%)
      sys: {
        pod: 'd'
      },
      dt_txt: '2022-03-15 15:00:00'
    }
 ],
  city: {
    id: 2643743,
    name: 'London',
    coord: {
      lat: 51.5073,
      lon: -0.1277
    },
    country: 'GB',
    population: 1000000,
    timezone: 0,
    sunrise: 1647324903,
    sunset: 1647367441
  }
};