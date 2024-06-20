import React from 'react';
import { SkillsContainer, SkillCard, SkillName, SkillLevel } from './SkillsSection.styles';

const skills = [
  { name: 'JavaScript', level: 'Advanced' },
  { name: 'React', level: 'Advanced' },
  { name: 'CSS', level: 'Intermediate' },
  { name: 'HTML', level: 'Advanced' },
  { name: 'Node.js', level: 'Intermediate' }
];

const SkillsSection = () => (
  <SkillsContainer id="skills">
    {skills.map((skill, index) => (
      <SkillCard key={index}>
        <SkillName>{skill.name}</SkillName>
        <SkillLevel>{skill.level}</SkillLevel>
      </SkillCard>
    ))}
  </SkillsContainer>
);

export default SkillsSection;
