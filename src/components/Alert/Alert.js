import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation, faXmark } from '@fortawesome/free-solid-svg-icons';

import styles from './Alert.module.scss';

const Alert = ({ messages, onCloseFunc }) => {
  return (
    <div className={styles.error}>
      <div className={styles.wrapper}>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={faTriangleExclamation} />
        </div>
        <div className={styles.messages}>
          {messages.map((message, i) => (
            <p key={i} className={styles.message}>
              <span>•</span>{message}
            </p>
          ))}
        </div>
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
  messages: PropTypes.array.isRequired,
  onCloseFunc: PropTypes.func.isRequired,
};

export default Alert;