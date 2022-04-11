import PropTypes from 'prop-types';

import styles from './SearchInput.module.scss';

const SearchInput = ({ value, onChangeFunc }) => (
  <>
    <input
      className={styles.component}
      type='text'
      role='searchbox'
      aria-label='search box'
      placeholder='Search for location...'
      autoFocus
      value={value}
      onChange={event => onChangeFunc(event.target.value)}
    />
  </>
);

SearchInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFunc: PropTypes.func.isRequired,
};

export default SearchInput;