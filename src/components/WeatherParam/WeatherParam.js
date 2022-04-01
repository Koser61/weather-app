import PropTypes from 'prop-types';

import styles from './WeatherParam.module.scss';

const WeatherParam = ({ small, children, description }) => (
  <div className={small ? styles.small : styles.component}>
    <div className={small ? styles.param_small : styles.param}>
      {children}
    </div>
    <p>{description}</p>
  </div>
);

WeatherParam.propTypes = {
  small: PropTypes.bool,
  children: PropTypes.node.isRequired,
  description: PropTypes.string.isRequired,
};

export default WeatherParam;