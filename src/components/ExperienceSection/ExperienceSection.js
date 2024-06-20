import React from 'react';
import { ExperienceContainer, ExperienceItem, Role, Company, Duration, Description, CompanyLogo } from './ExperienceSection.styles';
import companyLogo from '../../assets/companylogo.jfif';

const experiences = [
  {
    role: 'Frontend Developer',
    company: 'Tech Company',
    duration: 'Jan 2020 - Present',
    description: 'Worked on various frontend projects using React and Redux. Improved site performance and implemented responsive designs.',
    logo: companyLogo,
  },
  {
    role: 'Software Developer',
    company: 'Another Company',
    duration: 'Jun 2018 - Dec 2019',
    description: 'Developed backend services and APIs. Collaborated with cross-functional teams to define, design, and ship new features.',
    logo: companyLogo,
  },
];

const ExperienceSection = () => (
  <ExperienceContainer id="experience">
    {experiences.map((experience, index) => (
      <ExperienceItem key={index}>
        <CompanyLogo src={experience.logo} alt={`${experience.company} logo`} />
        <div>
          <Role>{experience.role}</Role>
          <Company>{experience.company}</Company>
          <Duration>{experience.duration}</Duration>
          <Description>{experience.description}</Description>
        </div>
      </ExperienceItem>
    ))}
  </ExperienceContainer>
);

export default ExperienceSection;
