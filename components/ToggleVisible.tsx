import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const ToggleVisible = ({ isVisible, children, delay }) => {
  const [visible, setVisible] = useState(isVisible);

  useEffect(() => {
    setTimeout(() => {
      setVisible(!isVisible);
    }, delay);
  }, [delay]);

  return visible ? children : null;
};

ToggleVisible.propTypes = {
  isVisible: PropTypes.bool,
};

ToggleVisible.defaultProps = {
  isVisible: false,
};

export default ToggleVisible;
