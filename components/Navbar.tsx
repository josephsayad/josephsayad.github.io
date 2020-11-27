import { Image } from 'semantic-ui-react';

const Navbar = () => (
  <div className="navbar">
    <div id="profile-picture-container">
      <Image
        id="profile-picture"
        src="images/josephsayad.jpg"
        size="small"
        circular
      />
    </div>
  </div>
);

export default Navbar;
