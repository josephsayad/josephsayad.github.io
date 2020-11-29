import { useState } from 'react';
import PropTypes from 'prop-types';
import ToggleVisible from './ToggleVisible';
import Logo from './Logo';
import Navbar from './Navbar';

type Sections = {
  about: string;
  project: string;
  work: string;
  resume: string;
};

type Props = {
  deviceType: string;
  sections: Sections;
};

const Main = ({ deviceType, sections }: Props): React.ReactElement => {
  const [activeView, setActiveView] = useState<string>('about');
  const delay: number = 7000;

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
