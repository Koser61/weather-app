//import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlassLocation } from '@fortawesome/free-solid-svg-icons';

import styles from './SearchButton.module.scss';

const SearchButton = () => (
  <button
    className={styles.component}
  >
    <FontAwesomeIcon icon={faMagnifyingGlassLocation} />
  </button>
);

SearchButton.propTypes = {
  
};

export default SearchButton;