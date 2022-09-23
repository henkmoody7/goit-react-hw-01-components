import styled from 'styled-components';

export const TableRow = styled.tr`
  padding: 8px;
  &:nth-child(even) {
    background-color: #d6eeee;
  }
`;

export const TableHead = styled.thead`
  background-color: #04aa6d;
  color: white;
  font-weight: bold;
  font-size: 13px;
`;

export const Td = styled.td`
  padding: 15px;
  width: 120px;
  border-collapse: collapse;
  border: 1px solid #ddd;
`;
