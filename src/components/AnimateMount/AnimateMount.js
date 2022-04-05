import PropTypes from 'prop-types';
import { useTransition, animated } from 'react-spring';

const AnimateMount = ({ children, show, variant }) => {
  const horizontalFadeInOut = useTransition(show, {
    from: { x: 14, opacity: 0 },
    enter: { x: 0, opacity: 1 },
    leave: { x: -14, opacity: 0 },
  });

  const verticalFadeInOut = useTransition(show, {
    from: { y: 14, opacity: 0 },
    enter: { y: 0, opacity: 1 },
    leave: { y: -14, opacity: 0 },
  });

  switch(variant) {
    case 'horizontalFadeInOut':
      return (
        <>
          {horizontalFadeInOut((style, item) =>
            item &&
              <animated.div
                style={style}
                className={`AnimateMount_${variant}`}
              >
                {children}
              </animated.div>
          )}
        </>
      );
    case 'verticalFadeInOut':
      return (
        <>
          {verticalFadeInOut((style, item) =>
            item &&
              <animated.div
                style={style}
                className={`AnimateMount_${variant}`}
              >
                {children}
              </animated.div>
          )}
        </>
      );
    default: {
      console.error("Invalid prop `variant`! Animation won't work");

      return (
        <>
          {children}
        </>
      );
    }
  }

  
};

AnimateMount.propTypes = {
  children: PropTypes.node.isRequired,
  show: PropTypes.bool,
  variant: PropTypes.oneOf([
    'horizontalFadeInOut',
    'verticalFadeInOut'
  ]).isRequired,
};

export default AnimateMount;