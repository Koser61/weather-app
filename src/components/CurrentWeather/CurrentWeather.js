import PropTypes from 'prop-types';

import Card from '../Card/Card';

//import styles from './CurrentWeather.module.scss';

const CurrentWeather = ({ data }) => {
  return (
    <Card>
      <p>CurrentWeather</p>
    </Card>
  );
};

CurrentWeather.propTypes = {
  data: PropTypes.object.isRequired,
};

export default CurrentWeather;