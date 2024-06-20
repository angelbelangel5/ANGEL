import React from 'react';
import { ProjectsContainer, ProjectCard, ProjectImage, ProjectTitle, ProjectDescription } from './ProjectsSection.styles';
import project1 from '../../assets/project1.jpg.png';
import project2 from '../../assets/project2.jpg.png';

const ProjectsSection = () => (
  <ProjectsContainer id="projects">
    <ProjectCard>
      <ProjectImage src={project1} alt="Project 1" />
      <ProjectTitle>Project 1</ProjectTitle>
      <ProjectDescription>This is a description of Project 1.</ProjectDescription>
    </ProjectCard>
    <ProjectCard>
      <ProjectImage src={project2} alt="Project 2" />
      <ProjectTitle>Project 2</ProjectTitle>
      <ProjectDescription>This is a description of Project 2.</ProjectDescription>
    </ProjectCard>
  </ProjectsContainer>
);

export default ProjectsSection;
