import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation, faXmark } from '@fortawesome/free-solid-svg-icons';

import styles from './Alert.module.scss';

const Alert = ({ message, onCloseFunc }) => {
  return (
    <div className={styles.error}>
      <div className={styles.wrapper}>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={faTriangleExclamation} />
        </div>
        <p className={styles.message}>
          {message}
        </p>
        <button
          className={styles.closeButton}
          onClick={() => onCloseFunc(false)}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
    </div>
  );
};

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  onCloseFunc: PropTypes.func.isRequired,
};

export default Alert;