import PropTypes from 'prop-types';

import styles from './SearchInput.module.scss';

const SearchInput = ({ value, onChangeFunc }) => (
  <>
    <input
      className={styles.component}
      type='text'
      placeholder='Search for location...'
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