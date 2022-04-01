import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSun,
  faMoon,
  faCloudSun,
  faCloudMoon,
  faCloud,
  faCloudShowersHeavy,
  faCloudSunRain,
  faCloudMoonRain,
  faCloudBolt,
  faSnowflake,
  faSmog,
  faQuestion
} from '@fortawesome/free-solid-svg-icons';

const WeatherIcon = ({ iconCode }) => {
  const getIconByCode = () => {
    switch(iconCode) {
      case '01d':
        return faSun;
      case '01n':
        return faMoon;
      case '02d':
        return faCloudSun;
      case '02n':
        return faCloudMoon;
      case '03d':
        return faCloud;
      case '03n':
        return faCloud;
      case '04d':
        return faCloud;
      case '04n':
        return faCloud;
      case '09d':
        return faCloudShowersHeavy;
      case '09n':
        return faCloudShowersHeavy;
      case '10d':
        return faCloudSunRain;
      case '10n':
        return faCloudMoonRain;
      case '11d':
        return faCloudBolt;
      case '11n':
        return faCloudBolt;
      case '13d':
        return faSnowflake;
      case '13n':
        return faSnowflake;
      case '50d':
        return faSmog;
      case '50n':
        return faSmog;
      default:
        return faQuestion;
    }
  };

  return (
    <>
      <FontAwesomeIcon icon={getIconByCode()} />
    </>
  );
};

WeatherIcon.propTypes = {
  iconCode: PropTypes.string.isRequired,
};

export default WeatherIcon;