import styled from 'styled-components';

export const FriendsItem = styled.li`
  display: flex;
  padding: 8px;
  margin-top: 16px;
  align-items: center;
  width: 200px;
  border-radius: 4px;
  background-color: #ededed;
  box-shadow: 9px 10px 7px 0px rgba(176, 148, 176, 1);
`;

export const Status = styled.span`
  display: block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  margin-right: 8px;
  background-color: ${p => (p.isOnline ? 'green' : 'red')};
`;

export const Name = styled.p`
  margin-left: 8px;
`;
