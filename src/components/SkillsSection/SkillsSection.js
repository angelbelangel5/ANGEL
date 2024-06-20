import React from 'react';
import { SkillsContainer, SkillCard, SkillIcon, SkillName, SkillLevel } from './SkillsSection.styles';
import javascriptIcon from '../../assets/icons8-javascript-48.png';
import reactIcon from '../../assets/icons8-typescript-48.png';
import cssIcon from '../../assets/icons8-nodejs-48.png';
import htmlIcon from '../../assets/icons8-react-16.png';
import nodejsIcon from '../../assets/icons8-mongodb-48.png';

const skills = [
  { name: 'JavaScript', level: 'Advanced', icon: javascriptIcon },
  { name: 'React', level: 'Advanced', icon: reactIcon },
  { name: 'CSS', level: 'Intermediate', icon: cssIcon },
  { name: 'HTML', level: 'Advanced', icon: htmlIcon },
  { name: 'Node.js', level: 'Intermediate', icon: nodejsIcon }
];

const SkillsSection = () => (
  <SkillsContainer id="skills">
    {skills.map((skill, index) => (
      <SkillCard key={index}>
        <SkillIcon src={skill.icon} alt={`${skill.name} icon`} />
        <SkillName>{skill.name}</SkillName>
        <SkillLevel>{skill.level}</SkillLevel>
      </SkillCard>
    ))}
  </SkillsContainer>
);

export default SkillsSection;
