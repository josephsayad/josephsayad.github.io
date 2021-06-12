import PropTypes from 'prop-types';
import ToggleVisible from './ToggleVisible';
import Logo from './Logo';
import Navbar from './Navbar';
import About from './About';

type Props = {
  deviceDetail: DeviceDetail;
  navOptions: NavOption[];
};

const Main = ({
  deviceDetail: { type, windowWidth },
  navOptions,
}: Props): React.ReactElement => {
  const delay: number = 3500;

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
};

Main.defaultProps = {
  navOptions: [
    { option: 'Github', link: 'https://github.com/josephsayad' },
    { option: 'Linkedin', link: 'https://www.linkedin.com/in/josephsayad/' },
  ],
};

export default Main;
