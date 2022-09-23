import PropTypes from 'prop-types';
import { TableRow, TableHead, Td } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <table
      style={{
        borderCollapse: 'collapse',
      }}
    >
      <TableHead>
        <TableRow>
          <Td>Type</Td>
          <Td>Amount</Td>
          <Td>Currency</Td>
        </TableRow>
      </TableHead>

      <tbody>
        {items.map(item => (
          <TableRow key={item.id}>
            <Td>{item.type}</Td>
            <Td>{item.amount}</Td>
            <Td>{item.currency}</Td>
          </TableRow>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
