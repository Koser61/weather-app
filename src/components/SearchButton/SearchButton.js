import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlassLocation } from '@fortawesome/free-solid-svg-icons';

import styles from './SearchButton.module.scss';

const SearchButton = ({ onClickFunc }) => (
  <button
    className={styles.component}
    onClick={() => onClickFunc()}
  >
    <FontAwesomeIcon icon={faMagnifyingGlassLocation} />
  </button>
);

SearchButton.propTypes = {
  onClickFunc: PropTypes.func.isRequired,
};

export default SearchButton;