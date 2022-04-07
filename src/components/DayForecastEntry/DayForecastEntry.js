import PropTypes from 'prop-types';

import ForecastParam from '../ForecastParam/ForecastParam';
import WeatherIcon from '../WeatherIcon/WeatherIcon';

import styles from './DayForecastEntry.module.scss';

const DayForecastEntry = ({ data }) => {
  const { main, weather, wind, pop, dt } = data;

  const getHour = () => {
    const milliseconds = dt * 1000;
    const dateObject = new Date(milliseconds);

    const hour = dateObject.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: false
    });
    
    return hour;
  };

  return (
    <div className={styles.component}>
      <div className={styles.wrapper}>
        <div className={styles.hourBlock}>
          <p>{getHour()}</p>
        </div>
        <div className={styles.params}>
          <ForecastParam icon>
            <WeatherIcon iconCode={weather[0].icon} />
          </ForecastParam>
          <ForecastParam description='Min'>
            {`${Math.round(main.temp_min)}°C`}
          </ForecastParam>
          <ForecastParam description='Max'>
            {`${Math.round(main.temp_max)}°C`}
          </ForecastParam>
          <ForecastParam description='Wind' hide>
            {`${Math.round(wind.speed)}m/s`}
          </ForecastParam>
          <ForecastParam description='Rain'>
            {`${pop * 100}%`}
          </ForecastParam>
        </div>
      </div>
    </div>
  );
};

DayForecastEntry.propTypes = {
  data: PropTypes.object.isRequired,
};

export default DayForecastEntry;