import PropTypes from 'prop-types';

import styles from './Card.module.scss';

const Card = ({ children }) => {
  return (
    <article className={styles.component}>
      {children}
    </article>
  );
};

Card.propTypes = {
  children: PropTypes.node,
};

export default Card;