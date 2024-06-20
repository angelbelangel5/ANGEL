import styled from 'styled-components';

export const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 50px 20px;
  background-color: #f0f0f0;
`;

export const ProjectCard = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px;
  overflow: hidden;
  width: 300px;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const ProjectTitle = styled.h3`
  font-size: 1.5em;
  color: #16213e;
  margin: 20px;
`;

export const ProjectDescription = styled.p`
  font-size: 1em;
  color: #4a4a4a;
  margin: 20px;
`;
