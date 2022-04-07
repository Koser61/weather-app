import PropTypes from 'prop-types';

import DayForecast from '../DayForecast/DayForecast';

const WeatherForecast = ({ data }) => {
  const groupDataEntriesByDay = () => {
    const dateToDateString = (date) => {
      const milliseconds = date * 1000;
      const entryDateTime = new Date(milliseconds);

      const years = entryDateTime.getFullYear();
      const months = entryDateTime.getMonth();
      const days = entryDateTime.getDate();

      const entryDate = new Date(years, months, days);

      return entryDate.toDateString();
    };

    const { list } = data;

    const forecastDaysDates = [];

    for(let dataEntry of list) {
      const entryDateString = dateToDateString(dataEntry.dt);

      if(!forecastDaysDates.includes(entryDateString)) {
        forecastDaysDates.push(entryDateString);
      }
    }

    const forecastDays = [];

    for(let forecastDate of forecastDaysDates) {
      const date = new Date(forecastDate);
      const dateLocaleString = date.toLocaleString('en-US', {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
      });
      const entries = list.filter(entry =>
        dateToDateString(entry.dt) === forecastDate
      );

      const dataObject = {
        date: dateLocaleString,
        entries: entries,
      };

      forecastDays.push(dataObject);
    }

    return forecastDays;
  };

  const forecastDays = groupDataEntriesByDay();
  
  return (
    <>
      {forecastDays.map((day, i) => {
        return (
          <DayForecast
            key={i}
            date={day.date}
            entries={day.entries}
          />
        );
      })}
    </>
  );
};

WeatherForecast.propTypes = {
  data: PropTypes.object.isRequired,
};

export default WeatherForecast;