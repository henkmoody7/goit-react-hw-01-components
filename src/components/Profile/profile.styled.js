import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  display: inline-block;
  border: 3px solid black;
  text-align: center;
  padding: 16px;
  border-radius: 15px;
  background-color: #fdf6f8;
`;

export const StatsList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 16px;
  padding: 8px;
  border: 1px solid black;
  border-radius: 8px;
  background-color: #ffbece;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
`;

export const Username = styled.p`
  font-size: 24px;
  margin-top: 8px;
  margin-bottom: 8px;
`;
