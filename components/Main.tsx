import { useState } from 'react';
import PropTypes from 'prop-types';
import ToggleVisible from './ToggleVisible';
import Logo from './Logo';
import Navbar from './Navbar';

const Main = ({ deviceType, sections }) => {
  const [activeView, setActiveView] = useState('about');
  const delay = 7000;

  return (
    <main id="main-container">
      <ToggleVisible isVisible delay={delay}>
        <div id="logo-splash-container">
          <Logo classname="logo-splash" width={300} />
        </div>
      </ToggleVisible>
      <ToggleVisible delay={delay}>
        <Navbar deviceType={deviceType} options={Object.values(sections)} />
      </ToggleVisible>
    </main>
  );
};

Main.propTypes = {
  deviceType: PropTypes.string.isRequired,
  sections: PropTypes.shape({
    about: PropTypes.string.isRequired,
    project: PropTypes.string.isRequired,
    work: PropTypes.string.isRequired,
    resume: PropTypes.string.isRequired,
  }),
};

Main.defaultProps = {
  sections: {
    about: 'About',
    project: 'Projects',
    work: 'Experience',
    resume: 'Resume',
  },
};

export default Main;
