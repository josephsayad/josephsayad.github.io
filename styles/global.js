import styled from 'styled-components';

/* Mobile Menu */

export const MobileMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(#000000, #292929);
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  width: 100%;

  ul {
    padding: 0px;
  }

  li {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #ffffff;
    text-decoration: none;
    transition: color 0.3s linear;
    font-size: 1.35rem;
    text-align: center;
  }
`;
