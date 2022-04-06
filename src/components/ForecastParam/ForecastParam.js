import PropTypes from 'prop-types';

import styles from './ForecastParam.module.scss';

const ForecastParam = ({ icon, hide, children, description }) => {
  if(icon) {
    return (
      <div className={styles.icon}>
        {children}
      </div>
    );
  } else {
    return (
      <div className={hide ? styles.hide : styles.component}>
        <div className={styles.value}>
          {children}
        </div>
        <p>{description}</p>
      </div>
    );
  }
};

ForecastParam.propTypes = {
  icon: PropTypes.bool,
  hide: PropTypes.bool,
  children: PropTypes.node.isRequired,
  description: PropTypes.string,
};

export default ForecastParam;