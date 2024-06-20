import React from 'react';
import { ExperienceContainer, ExperienceItem, Role, Company, Duration, Description } from './ExperienceSection.styles';

const experiences = [
  {
    role: 'Frontend Developer',
    company: 'Tech Company A',
    duration: 'Jan 2020 - Present',
    description: 'Developed and maintained the front end for various web applications using React and Redux.',
  },
  {
    role: 'Junior Developer',
    company: 'Tech Company B',
    duration: 'Jun 2018 - Dec 2019',
    description: 'Assisted in the development of user interfaces and contributed to the design of new features.',
  },
];

const ExperienceSection = () => (
  <ExperienceContainer id="experience">
    <h2>Experience</h2>
    {experiences.map((experience, index) => (
      <ExperienceItem key={index}>
        <Role>{experience.role}</Role>
        <Company>{experience.company}</Company>
        <Duration>{experience.duration}</Duration>
        <Description>{experience.description}</Description>
      </ExperienceItem>
    ))}
  </ExperienceContainer>
);

export default ExperienceSection;
