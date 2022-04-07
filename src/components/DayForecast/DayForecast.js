import PropTypes from 'prop-types';

import Card from '../Card/Card';
import DayForecastEntry from '../DayForecastEntry/DayForecastEntry';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import styles from './DayForecast.module.scss';

const DayForecast = ({ date, entries }) => (
  <Card>
    <div className={styles.header}>
      <h2>{date}</h2>
      <button className={styles.dropdownButton}>
        <FontAwesomeIcon icon={faChevronDown} />
      </button>
    </div>
    {entries.map((entry, i) => {
      return (
        <DayForecastEntry key={i} data={entry} />
      );
    })}
  </Card>
);

DayForecast.propTypes = {
  date: PropTypes.string.isRequired,
  entries: PropTypes.array.isRequired,
};

export default DayForecast;