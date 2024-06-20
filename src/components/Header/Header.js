import React from 'react';
import { HeaderContainer, TextContainer, HeroImage, Name, Title } from './Header.styles';
import heroImage from '../../assets/hero-image.jpg';

const Header = () => (
  <HeaderContainer id="home">
    <TextContainer>
      <Name>Angel Belangel</Name>
      <Title>Frontend Developer</Title>
    </TextContainer>
    <HeroImage src={heroImage} alt="Hero" />
  </HeaderContainer>
);

export default Header;
