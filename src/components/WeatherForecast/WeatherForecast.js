import PropTypes from 'prop-types';

import { timestampToLongDate, longDateToShortDate } from '../../utils/dateUtils';

import DayForecast from '../DayForecast/DayForecast';

const WeatherForecast = ({ data }) => {
  const getForecastDates = () => {
    const forecastDates = [];

    for(let dataEntry of data.list) {
      const entryDateString = timestampToLongDate(dataEntry.dt);

      if(!forecastDates.includes(entryDateString)) {
        forecastDates.push(entryDateString);
      }
    }

    return forecastDates;
  };

  const groupDataEntriesByDay = (forecastDates) => {
    const groupedEntries = [];

    for(let forecastDate of forecastDates) {
      const entries = data.list.filter(entry =>
        timestampToLongDate(entry.dt) === forecastDate
      );

      const dataObject = {
        date: longDateToShortDate(forecastDate),
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