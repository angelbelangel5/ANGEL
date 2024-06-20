import React from 'react';
import { ProjectsContainer, ProjectCard, ProjectTitle, ProjectDescription } from './ProjectsSection.styles';

const projects = [
  { title: 'Project One', description: 'A wonderful project that solves problem X using technology Y.' },
  { title: 'Project Two', description: 'An amazing project that enhances user experience with feature Z.' },
];

const ProjectsSection = () => (
  <ProjectsContainer>
    <h2>Projects</h2>
    {projects.map((project, index) => (
      <ProjectCard key={index}>
        <ProjectTitle>{project.title}</ProjectTitle>
        <ProjectDescription>{project.description}</ProjectDescription>
      </ProjectCard>
    ))}
  </ProjectsContainer>
);

export default ProjectsSection;
