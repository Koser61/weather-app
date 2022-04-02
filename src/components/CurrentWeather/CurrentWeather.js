import PropTypes from 'prop-types';

import Card from '../Card/Card';
import WeatherParam from '../WeatherParam/WeatherParam';
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import WindDirection from '../WindDirection/WindDirection';

import styles from './CurrentWeather.module.scss';

const CurrentWeather = ({ data }) => {
  const { name, sys, dt, weather, main, wind, visibility, clouds } = data;

  const miliseconds = dt * 1000;
  const dateObject = new Date(miliseconds);
  const date = dateObject.toLocaleString('en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  });

  const getVisibilityString = () => {
    if(visibility >= 1000) {
      const visibilityKilometres = visibility / 1000;
      return `${Math.round(visibilityKilometres)}km`;
    } else {
      return `${Math.round(visibility)}m`;
    }
  };

  return (
    <Card>
      <div className={styles.header}>
        <h1>{`${name}, ${sys.country}`}</h1>
        <p>{date}</p>
      </div>
      <div className={styles.grid}>
        <div className={styles.mainParams}>
          <WeatherParam description={weather[0].description}>
            <WeatherIcon iconCode={weather[0].icon} />
          </WeatherParam>
          <WeatherParam
            description={`Feels like ${Math.round(main.feels_like)}°C`}
          >
            {`${Math.round(main.temp)}°C`}
          </WeatherParam>
        </div>
        <div className={styles.otherParams}>
          <WeatherParam small description='Visibility'>
            {getVisibilityString()}
          </WeatherParam>
          <WeatherParam small description='Cloudiness'>
            {`${clouds.all}%`}
          </WeatherParam>
          <WeatherParam small description='Pressure'>
            {`${main.pressure}hPa`}
          </WeatherParam>
          <WeatherParam small description='Humidity'>
            {`${main.humidity}%`}
          </WeatherParam>
          <WeatherParam small description='Wind direction'>
            <WindDirection degree={wind.deg} />
          </WeatherParam>
          <WeatherParam small description='Wind speed'>
            {`${Math.round(wind.speed)}m/s`}
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