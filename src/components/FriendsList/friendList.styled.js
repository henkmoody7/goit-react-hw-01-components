import styled from 'styled-components';

export const FriendsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const FriendsItem = styled.li`
  display: flex;

  margin-top: 16px;
  align-items: center;
  width: 200px;
  border: 2px solid black;
`;

export const Status = styled.span`
  display: block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${p => (p.isOnline ? 'green' : 'red')};
`;
