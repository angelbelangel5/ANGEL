import styled from 'styled-components';

export const ExperienceContainer = styled.div`
  padding: 50px 20px;
  background-color: #f0f0f0;
`;

export const ExperienceItem = styled.div`
  display: flex;
  align-items: flex-start;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px 0;
  padding: 20px;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

export const CompanyLogo = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 20px;
  border-radius: 50%;
  object-fit: cover;
`;

export const Role = styled.h3`
  margin: 0;
  font-size: 1.5em;
  color: #16213e;
`;

export const Company = styled.h4`
  margin: 0;
  font-size: 1.2em;
  color: #0f3460;
`;

export const Duration = styled.p`
  margin: 10px 0;
  font-size: 1em;
  color: #4a4a4a;
`;

export const Description = styled.p`
  font-size: 1em;
  color: #4a4a4a;
`;
