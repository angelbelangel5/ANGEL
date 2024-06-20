import React from 'react';
import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import BioSection from '../../components/BioSection';
import ProjectsSection from '../../components/ProjectsSection';
import SkillsSection from '../../components/SkillsSection';
import ExperienceSection from '../../components/ExperienceSection';

const HomePage = () => (
  <div>
    <Navbar />
    <Header />
    <BioSection />
    <ProjectsSection />
    <SkillsSection />
    <ExperienceSection />
  </div>
);

export default HomePage;
