import PropTypes from 'prop-types';

import Card from '../Card/Card';
import WeatherParam from '../WeatherParam/WeatherParam';
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import WindDirection from '../WindDirection/WindDirection';

import { timestampToShortDate } from '../../utils/dateUtils';
import { parseMetresToString, parseCelsius, parseWind } from '../../utils/unitUtils';

import styles from './CurrentWeather.module.scss';

const CurrentWeather = ({ data }) => {
  const { name, sys, dt, weather, main, wind, visibility, clouds } = data;

  return (
    <Card>
      <div className={styles.header}>
        <h1>{`${name}, ${sys.country}`}</h1>
        <p>{timestampToShortDate(dt)}</p>
      </div>
      <div className={styles.grid}>
        <div className={styles.mainParams}>
          <WeatherParam description={weather[0].description}>
            <WeatherIcon iconCode={weather[0].icon} />
          </WeatherParam>
          <WeatherParam
            description={`Feels like ${parseCelsius(main.feels_like)}`}
          >
            {parseCelsius(main.temp)}
          </WeatherParam>
        </div>
        <div className={styles.otherParams}>
          <WeatherParam small description='Visibility'>
            {parseMetresToString(visibility)}
          </WeatherParam>
          <WeatherParam small description='Pressure'>
            {`${main.pressure}hPa`}
          </WeatherParam>
          <WeatherParam small description='Wind direction'>
            <WindDirection degree={wind.deg} />
          </WeatherParam>
          <WeatherParam small description='Cloudiness'>
            {`${clouds.all}%`}
          </WeatherParam>
          <WeatherParam small description='Humidity'>
            {`${main.humidity}%`}
          </WeatherParam>
          <WeatherParam small description='Wind speed'>
            {parseWind(wind.speed)}
          </WeatherParam>
        </div>
      </div>
    </Card>
  );
};

CurrentWeather.propTypes = {
  data: PropTypes.object.isRequired,
};

export default CurrentWeather;