import { useState } from 'react';
import PropTypes from 'prop-types';
import { useTransition, useSpring, animated } from 'react-spring';

import Card from '../Card/Card';
import DayForecastEntry from '../DayForecastEntry/DayForecastEntry';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import styles from './DayForecast.module.scss';

const DayForecast = ({ date, entries }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const openDropdown = useTransition(dropdownOpen, {
    from: { maxHeight: 0, overflow: 'hidden' },
    enter: { maxHeight: 1000, overflow: 'hidden' },
    leave: { maxHeight: 0, overflow: 'hidden' },
  });

  const rotateIcon = useSpring({
    transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)'
  });

  return (
    <Card>
      <div className={styles.header}>
        <h2>{date}</h2>
        <button
          className={styles.dropdownToggleButton}
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <animated.div style={rotateIcon}>
            <div className={styles.buttonIcon}>
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
          </animated.div>
        </button>
      </div>
      {openDropdown((style, item) =>
        item &&
          <animated.div style={style}>
            {entries.map((entry, i) => {
              return (
                <DayForecastEntry key={i} data={entry} />
              );
            })}
          </animated.div>
      )}
    </Card>
  );
};

DayForecast.propTypes = {
  date: PropTypes.string.isRequired,
  entries: PropTypes.array.isRequired,
};

export default DayForecast;