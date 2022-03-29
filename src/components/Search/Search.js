import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlassLocation } from '@fortawesome/free-solid-svg-icons';

import styles from './Search.module.scss';

const Search = ({ value, onChangeFunc }) => {
  return (
    <div className={styles.component}>
      <div className={styles.box}>
        <input
          className={styles.input}
          type='text'
          placeholder='Search for location...'
          value={value}
          onChange={event => onChangeFunc(event.target.value)}
        />
        <button
          className={styles.button}
        >
          <FontAwesomeIcon icon={faMagnifyingGlassLocation} />
        </button>
      </div>
    </div>
  );
};

Search.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFunc: PropTypes.func.isRequired,
};

export default Search;