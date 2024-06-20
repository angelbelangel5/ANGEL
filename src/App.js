import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import BioSection from './components/BioSection/BioSection';
import ProjectsSection from './components/ProjectsSection/ProjectsSection';
import SkillsSection from './components/SkillsSection/SkillsSection';
import ExperienceSection from './components/ExperienceSection/ExperienceSection';
import './App.css';

const App = () => {
  const [visibleSection, setVisibleSection] = useState('home');

  const handleNavClick = (section) => {
    setVisibleSection(section);
  };

  return (
    <div className="App">
      <Navbar onNavClick={handleNavClick} />
      {visibleSection === 'home' && <Header />}
      {visibleSection === 'bio' && <BioSection />}
      {visibleSection === 'projects' && <ProjectsSection />}
      {visibleSection === 'skills' && <SkillsSection />}
      {visibleSection === 'experience' && <ExperienceSection />}
    </div>
  );
};

export default App;
