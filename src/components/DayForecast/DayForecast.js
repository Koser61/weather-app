import PropTypes from 'prop-types';
//import { DateTime } from 'luxon';

import Card from '../Card/Card';
import DayForecastEntry from '../DayForecastEntry/DayForecastEntry';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import styles from './DayForecast.module.scss';

const DayForecast = ({ dateTime, entries, timezone }) => {
  const getDate = () => {
    const milliseconds = dateTime * 1000;
    const dateObject = new Date(milliseconds);
    
    const date = dateObject.toLocaleString('en-US', {
      weekday: 'long',
      day: 'numeric',
      month: 'long'
    });
    
    return date;
  };

  return (
    <Card>
      <div className={styles.header}>
        <h2>{getDate()}</h2>
        <button className={styles.dropdownButton}>
          <FontAwesomeIcon icon={faChevronDown} />
        </button>
      </div>
      {entries && entries.map((entry) => {
        return (
          <>
            <DayForecastEntry data={entry} />
          </>
        );
      })}
    </Card>
  );
};

DayForecast.propTypes = {
  dateTime: PropTypes.number.isRequired,
  timezone: PropTypes.number.isRequired,
  //entries: PropTypes.array.isRequired,
};

export default DayForecast;