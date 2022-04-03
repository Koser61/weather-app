import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownLong } from '@fortawesome/free-solid-svg-icons';

const WindDirection = ({ degree }) => (
  <>
    <FontAwesomeIcon icon={faDownLong} transform={{ rotate: degree }} />
  </>
);

WindDirection.propTypes = {
  degree: PropTypes.number.isRequired,
};

export default WindDirection;