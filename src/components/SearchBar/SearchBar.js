import PropTypes from 'prop-types';

import styles from './SearchBar.module.scss';

const SearchBar = ({ children }) => (
  <div className={styles.component}>
    {children}
  </div>
);

SearchBar.propTypes = {
  children: PropTypes.node,
};

export default SearchBar;