import styled from 'styled-components';

export const ProjectsContainer = styled.section`
  padding: 60px 20px;
  background-color: #f0f0f0;
  color: #1a1a2e;
  text-align: center;
`;

export const ProjectCard = styled.div`
  background-color: #ffffff;
  padding: 20px;
  margin: 20px 0;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

export const ProjectTitle = styled.h3`
  margin: 0;
  font-size: 1.5em;
  color: #0f3460;
`;

export const ProjectDescription = styled.p`
  font-size: 1em;
  margin-top: 10px;
`;
