import { useState } from 'react';
import Logo from './Logo';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MobileMenu } from '../styles/global';

type Props = {
  deviceType: string;
  options: NavOption[];
};

const Navbar = ({ deviceType, options }: Props): React.ReactElement => {
  const [open, setOpen] = useState<boolean>(false);

  const navItems: React.ReactElement = (
    <ul className="links">
      {options.map(({ option, link }: NavOption) => (
        <li key={option}>
          <a href={link}>{option}</a>
        </li>
      ))}
    </ul>
  );

  return (
    <div id="navbar">
      <div className="logo">
        <Logo
          classname="logo-name"
          viewBoxMinX="100"
          width={55}
          viewBoxHeight="440"
        />
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
