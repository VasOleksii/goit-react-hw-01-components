import PropTypes from 'prop-types';
import {
  TableStyled,
  TableHeadStyled,
  TableBodyStyled,
  TransactionStyled,
} from './TransactionHistory.style';

export const TransactionHistory = ({ items }) => {
  return (
    <TableStyled className="transaction-history">
      <thead>
        <tr>
          <TableHeadStyled>Type</TableHeadStyled>
          <TableHeadStyled>Amount</TableHeadStyled>
          <TableHeadStyled>Currency</TableHeadStyled>
        </tr>
      </thead>
      <TableBodyStyled>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <TransactionStyled key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </TransactionStyled>
          );
        })}
      </TableBodyStyled>
    </TableStyled>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
