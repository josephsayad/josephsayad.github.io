import PropTypes from 'prop-types';
import ToggleVisible from './ToggleVisible';
import Logo from './Logo';
import Navbar from './Navbar';
import About from './About';

type Props = {
  deviceDetail: DeviceDetail;
  navOptions: NavOption[];
  footerOptions: NavOption[];
};

const Main = ({
  deviceDetail: { type, windowWidth },
  navOptions,
  footerOptions,
}: Props): React.ReactElement => {
  const delay: number = 7000;

  return (
    <main id="main-container">
      <ToggleVisible isVisible delay={delay}>
        <div id="logo-splash-container">
          <Logo classname="logo-splash" width={300} />
        </div>
      </ToggleVisible>
      <ToggleVisible delay={delay}>
        <div id="content">
          <Navbar deviceType={type} options={navOptions} />
          <About windowWidth={windowWidth} />
        </div>
      </ToggleVisible>
    </main>
  );
};

Main.propTypes = {
  deviceDetail: PropTypes.shape({
    type: PropTypes.string.isRequired,
    windowWidth: PropTypes.number,
  }),
  navOptions: PropTypes.arrayOf(
    PropTypes.shape({
      option: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }).isRequired
  ),
  footerOptions: PropTypes.arrayOf(
    PropTypes.shape({
      option: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }).isRequired
  ),
};

Main.defaultProps = {
  navOptions: [
    { option: 'About', link: '/' },
    { option: 'Resume', link: '/resume.pdf' },
  ],
  footerOptions: [
    { option: 'github', link: 'https://github.com/josephsayad' },
    { option: 'linkedin', link: 'https://www.linkedin.com/in/josephsayad/' },
  ],
};

export default Main;
