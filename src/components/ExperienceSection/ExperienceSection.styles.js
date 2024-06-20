import styled from 'styled-components';

export const ExperienceContainer = styled.section`
  padding: 60px 20px;
  background-color: #16213e;
  color: #ffffff;
  text-align: center;
`;

export const ExperienceItem = styled.div`
  margin: 20px 0;
  padding: 20px;
  background-color: #1a1a2e;
  border-radius: 8px;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

export const Role = styled.h3`
  margin: 0;
  font-size: 1.5em;
  color: #e94560;
`;

export const Company = styled.h4`
  margin: 0;
  font-size: 1.2em;
  color: #0f3460;
`;

export const Duration = styled.p`
  margin: 10px 0;
  font-size: 1em;
  color: #f0f0f0;
`;

export const Description = styled.p`
  font-size: 1em;
  color: #f0f0f0;
`;
