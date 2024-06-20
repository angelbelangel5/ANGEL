import React from 'react';
import { SkillsContainer, SkillList, SkillItem } from './SkillsSection.styles';

const skills = ['JavaScript', 'React', 'CSS', 'HTML', 'Git', 'Responsive Design'];

const SkillsSection = () => (
  <SkillsContainer id="skills">
    <h2>Skills</h2>
    <SkillList>
      {skills.map((skill, index) => (
        <SkillItem key={index}>{skill}</SkillItem>
      ))}
    </SkillList>
  </SkillsContainer>
);

export default SkillsSection;
