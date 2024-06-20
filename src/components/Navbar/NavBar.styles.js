import styled from 'styled-components';

export const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #16213e;
  padding: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

export const NavItem = styled.button`
  color: white;
  margin: 0 15px;
  padding: 10px 20px;
  font-size: 1em;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #e94560;
  }
`;
