import PropTypes from 'prop-types';

import styles from './Container.module.scss';

const Container = ({ children, alert }) => (
  <div className={alert ? styles.alert : styles.component}>
    {children}
  </div>
);

Container.propTypes = {
  children: PropTypes.node,
  alert: PropTypes.bool,
};

export default Container;