import PropTypes from 'prop-types';

import styles from './SearchBar.module.scss';

const SearchBar = ({ children }) => (
  <form className={styles.component}>
    {children}
  </form>
);

SearchBar.propTypes = {
  children: PropTypes.node,
};

export default SearchBar;