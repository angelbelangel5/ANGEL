import styled from 'styled-components';

export const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 50px 20px;
  background-color: #16213e;
`;

export const SkillCard = styled.div`
  background-color: #1a1a2e;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px;
  padding: 20px;
  width: 200px;
  text-align: center;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

export const SkillIcon = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
  margin-bottom: 15px;
`;

export const SkillName = styled.h3`
  font-size: 1.5em;
  color: #e94560;
  margin: 0 0 10px 0;
`;

export const SkillLevel = styled.p`
  font-size: 1em;
  color: #f0f0f0;
  margin: 0;
`;
