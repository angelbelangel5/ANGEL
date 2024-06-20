import styled from 'styled-components';

export const SkillsContainer = styled.section`
  padding: 60px 20px;
  background-color: #0f3460;
  color: #ffffff;
  text-align: center;
`;

export const SkillList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const SkillItem = styled.li`
  display: inline-block;
  margin: 10px;
  padding: 10px 20px;
  background-color: #e94560;
  border-radius: 20px;
  font-size: 1em;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: #1a1a2e;
  }
`;
