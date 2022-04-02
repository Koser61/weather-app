import PropTypes from 'prop-types';

import Card from '../Card/Card';
import WeatherParam from '../WeatherParam/WeatherParam';
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import WindDirection from '../WindDirection/WindDirection';

import styles from './CurrentWeather.module.scss';

const CurrentWeather = ({ data }) => {
  return (
    <Card>
      <div className={styles.header}>
        <h1>London, GB</h1>
        <p>Wednesday 30 March</p>
      </div>
      <div className={styles.grid}>
        <div className={styles.mainParams}>
          <WeatherParam description='thunderstorm with heavy drizzle'>
            <WeatherIcon iconCode='11d' />
          </WeatherParam>
          <WeatherParam description='Feels like 44°C'>
            45°C
          </WeatherParam>
        </div>
        <div className={styles.otherParams}>
          <WeatherParam small description='Visibility'>
            999m
          </WeatherParam>
          <WeatherParam small description='Cloudiness'>
            75%
          </WeatherParam>
          <WeatherParam small description='Pressure'>
            1004hPa
          </WeatherParam>
          <WeatherParam small description='Humidity'>
            78%
          </WeatherParam>
          <WeatherParam small description='Wind direction'>
            <WindDirection degree={45} />
          </WeatherParam>
          <WeatherParam small description='Wind speed'>
            100m/s
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