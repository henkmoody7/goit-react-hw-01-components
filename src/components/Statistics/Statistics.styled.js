import styled from 'styled-components';
import { getRandomHexColor } from 'utils/randomColor';
export const Section = styled.section`
  background-color: aliceblue;
  height: max-content;
  text-align: center;
  border: 3px solid black;
  border-radius: 5px;
`;

export const Title = styled.h2`
  margin-top: 20px;
`;

export const StatList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 16px;
  background-color: ${getRandomHexColor};
`;

export const PercentageSpan = styled.span`
  font-size: 24px;
`;
