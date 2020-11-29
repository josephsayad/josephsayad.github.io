import { useState } from 'react';
import Logo from './Logo';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MobileMenu } from '../styles/global';

type Props = {
  deviceType: string;
  options: string[];
};

const Navbar = ({ deviceType, options }: Props): React.ReactElement => {
  const [open, setOpen] = useState<boolean>(false);
  const navItems: React.ReactElement = (
    <ul className="links">
      {options.map((option: string) => (
        <li key={option}>
          <a href="/">{option}</a>
        </li>
      ))}
    </ul>
  );

  return (
    <div id="navbar">
      <div className="logo">
        <Logo classname="logo-name" minX="90" width={50} />
      </div>
      {deviceType === 'mobile' && (
        <>
          <button className="menu-button" onClick={() => setOpen(!open)}>
            <FontAwesomeIcon icon={open ? faTimes : faBars} size="lg" />
          </button>
          <MobileMenu open={open}>{navItems}</MobileMenu>
        </>
      )}
      {deviceType === 'desktop' && navItems}
    </div>
  );
};

export default Navbar;
