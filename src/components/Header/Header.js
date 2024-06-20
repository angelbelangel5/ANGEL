import React from 'react';
import { HeaderContainer, TextContainer, HeroImage, Name, Title } from './Header.styles';
import { ReactTyped as Typed } from 'react-typed';
import heroImage from '../../assets/hero-image.jpg';

const Header = () => (
  <HeaderContainer id="home">
    <TextContainer>
      <Name>Angel Belangel</Name>
      <Title>
        <Typed
          strings={['Frontend Developer', 'Software Developer', 'Mobile Developer']}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </Title>
    </TextContainer>
    <HeroImage src={heroImage} alt="Hero" />
  </HeaderContainer>
);

export default Header;
