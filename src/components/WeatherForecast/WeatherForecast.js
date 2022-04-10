import PropTypes from 'prop-types';

import DayForecast from '../DayForecast/DayForecast';

const WeatherForecast = ({ data }) => {
  const dateToDateString = (date) => {
    const milliseconds = date * 1000;
    const entryDateTime = new Date(milliseconds);

    const years = entryDateTime.getFullYear();
    const months = entryDateTime.getMonth();
    const days = entryDateTime.getDate();

    const entryDate = new Date(years, months, days);

    return entryDate.toDateString();
  };

  const getForecastDates = () => {
    const forecastDates = [];

    for(let dataEntry of data.list) {
      const entryDateString = dateToDateString(dataEntry.dt);

      if(!forecastDates.includes(entryDateString)) {
        forecastDates.push(entryDateString);
      }
    }

    return forecastDates;
  };

  const groupDataEntriesByDay = (forecastDates) => {
    const groupedEntries = [];

    for(let forecastDate of forecastDates) {
      const date = new Date(forecastDate);
      const dateLocaleString = date.toLocaleString('en-US', {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
      });
      const entries = data.list.filter(entry =>
        dateToDateString(entry.dt) === forecastDate
      );

      const dataObject = {
        date: dateLocaleString,
        entries: entries,
      };

      groupedEntries.push(dataObject);
    }

    return groupedEntries;
  };

  const forecastDates = getForecastDates()

  const groupedEntries = groupDataEntriesByDay(forecastDates);
  
  return (
    <>
      {groupedEntries.map((day, i) => {
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