import PropTypes from 'prop-types';

import ForecastParam from '../ForecastParam/ForecastParam';
import WeatherIcon from '../WeatherIcon/WeatherIcon';

import { timestampToHour } from '../../utils/dateUtils';
import { parseCelsius, parseWind, toPercentage } from '../../utils/unitUtils';

import styles from './DayForecastEntry.module.scss';

const DayForecastEntry = ({ data }) => {
  const { main, weather, wind, pop, dt } = data;

  return (
    <div className={styles.component}>
      <div className={styles.wrapper}>
        <div className={styles.hourBlock}>
          <p>{timestampToHour(dt)}</p>
        </div>
        <div className={styles.params}>
          <ForecastParam icon>
            <WeatherIcon iconCode={weather[0].icon} />
          </ForecastParam>
          <ForecastParam description='Min'>
            {parseCelsius(main.temp_min)}
          </ForecastParam>
          <ForecastParam description='Max'>
            {parseCelsius(main.temp_max)}
          </ForecastParam>
          <ForecastParam description='Wind' hide>
            {parseWind(wind.speed)}
          </ForecastParam>
          <ForecastParam description='Rain'>
            {toPercentage(pop)}
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