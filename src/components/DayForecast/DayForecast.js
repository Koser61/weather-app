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
      <header
        className={styles.header}
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        <h2>{date}</h2>
        <animated.div style={rotateIcon}>
          <div className={styles.chevronIcon}>
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
        </animated.div>
      </header>
      {openDropdown((style, item) =>
        item &&
          <animated.section style={style}>
            {entries.map((entry, i) => {
              return (
                <DayForecastEntry key={i} data={entry} />
              );
            })}
          </animated.section>
      )}
    </Card>
  );
};

DayForecast.propTypes = {
  date: PropTypes.string.isRequired,
  entries: PropTypes.array.isRequired,
};

export default DayForecast;