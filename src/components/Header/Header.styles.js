import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 60px 20px;
  background-color: #1a1a2e;
  color: #ffffff;
  height: 100vh;
`;

export const TextContainer = styled.div`
  flex: 1;
`;

export const HeroImage = styled.img`
  flex: 1;
  max-width: 50%;
  height: auto;
  border-radius: 8px;
`;

export const Name = styled.h1`
  font-size: 3.5em;
  margin: 0;
`;

export const Title = styled.h2`
  font-size: 2em;
  margin-top: 10px;
`;
