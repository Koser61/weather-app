import PropTypes from 'prop-types';

import styles from './Header.module.scss';

const Header = ({ children }) => (
  <header className={styles.component}>
    <div className={styles.container}>
      {children}
    </div>
  </header>
);

Header.propTypes = {
  children: PropTypes.node,
};

export default Header;