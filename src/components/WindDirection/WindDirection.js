import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpLong } from '@fortawesome/free-solid-svg-icons';

const WindDirection = ({ degree }) => (
  <>
    <FontAwesomeIcon icon={faUpLong} transform={{ rotate: degree }} />
  </>
);

WindDirection.propTypes = {
  degree: PropTypes.number.isRequired,
};

export default WindDirection;