import styled from 'styled-components';

export const TableStyled = styled.table`
  margin: 0 auto;
  border-collapse: separate;
`;

export const TableHeadStyled = styled.th`
  padding: 4px 0;
  background-color: #6ec871;
`;

export const TableBodyStyled = styled.tbody``;

export const TransactionStyled = styled.tr`
  :nth-of-type(even) {
    background-color: #cfcfcf;
  }
  .td {
    width: 140px;
    text-align: center;
    padding: 3px 0;
  }
`;
