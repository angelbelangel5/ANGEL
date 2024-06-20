import styled from 'styled-components';

export const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  padding: 10px 0;
  background-color: #1a1a2e;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

export const NavItem = styled.a`
  color: #ffffff;
  margin: 0 15px;
  text-decoration: none;
  font-size: 1.2em;
  transition: color 0.3s ease-in-out;
  &:hover {
    color: #e94560;
  }
`;
