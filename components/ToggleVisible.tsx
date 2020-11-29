import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

type Props = {
  isVisible: boolean;
  children: React.ReactElement;
  delay: number;
};

const ToggleVisible = ({
  isVisible,
  children,
  delay,
}: Props): Nullable<React.ReactElement> => {
  const [visible, setVisible] = useState<boolean>(isVisible);

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
