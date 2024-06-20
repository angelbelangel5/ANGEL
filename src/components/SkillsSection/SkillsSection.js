import React from 'react';
import { SkillsContainer, SkillCard, SkillName, SkillLevel } from './SkillsSection.styles';

const skills = [
  { name: 'ReactJs', level: 'Advanced' },
  { name: 'Reactnative', level: 'Advanced' },
  { name: 'Express', level: 'Intermediate' },
  { name: 'Mongodb', level: 'Advanced' },
  { name: 'Node.js', level: 'Intermediate' },
  { name: 'Typescript', level: 'Intermediate' },
  { name: 'Javascript', level: 'Intermediate' },
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
