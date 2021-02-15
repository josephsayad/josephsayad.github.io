import { useState } from 'react';
import Logo from './Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MobileMenu } from '../styles/global';

type Props = {
  deviceType: string;
  options: NavOption[];
};

const Navbar = ({ deviceType, options }: Props): React.ReactElement => {
  const [open, setOpen] = useState<boolean>(false);
  const footerItems: React.ReactElement = (
    <ul className="links">
      {options.map(({ option, link }: NavOption) => (
        <li key={option}>
          <a href={link}>{option}</a>
        </li>
      ))}
    </ul>
  );

  return <div id="footer">{footerItems}</div>;
};

export default Navbar;
