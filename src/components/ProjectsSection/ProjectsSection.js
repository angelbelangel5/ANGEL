import React from 'react';
import { ProjectsContainer, ProjectCard, ProjectImage, ProjectTitle, ProjectDescription } from './ProjectsSection.styles';
import project1Image from '../../assets/project1.jpg';
import project2Image from '../../assets/project2.jpg';

const projects = [
  { title: 'Project One', description: 'A wonderful project that solves problem X using technology Y.', image: project1Image },
  { title: 'Project Two', description: 'An amazing project that enhances user experience with feature Z.', image: project2Image },
];

const ProjectsSection = () => (
  <ProjectsContainer id="projects">
    <h2>Projects</h2>
    {projects.map((project, index) => (
      <ProjectCard key={index}>
        <ProjectImage src={project.image} alt={project.title} />
        <ProjectTitle>{project.title}</ProjectTitle>
        <ProjectDescription>{project.description}</ProjectDescription>
      </ProjectCard>
    ))}
  </ProjectsContainer>
);

export default ProjectsSection;
