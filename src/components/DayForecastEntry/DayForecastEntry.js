import PropTypes from 'prop-types';

import ForecastParam from '../ForecastParam/ForecastParam';
import WeatherIcon from '../WeatherIcon/WeatherIcon';

import styles from './DayForecastEntry.module.scss';

const DayForecastEntry = ({ data }) => {
  const { main, weather, wind, pop, dt_txt } = data;

  const timeTxt = dt_txt.split(' ')[1];
  const hourSplit = timeTxt.split(':');
  const hour = `${hourSplit[0]}:${hourSplit[1]}`;

  return (
    <div className={styles.component}>
      <div className={styles.wrapper}>
        <div className={styles.hourBlock}>
          <p>{hour}</p>
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