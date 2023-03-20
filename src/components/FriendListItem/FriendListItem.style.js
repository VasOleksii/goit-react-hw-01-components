import styled from 'styled-components';

export const FriendItemStyled = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 10px);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 2px 2px;
  padding: 3px;
  transition: background-color 380ms linear;
  transition: box-shadow 280ms linear;
  p {
    margin: 0 12px;
  }
  :not(:last-child) {
    margin-bottom: 12px;
  }
  :hover,
  :focus {
    background-color: #feffc8;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 4px 8px;
    p {
      font-weight: 500;
    }
  }
`;

export const FriendStatus = styled.span`
  justify-self: start;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin: 0 12px;
  background-color: ${({ status }) => {
    return status === true ? 'green' : 'red';
  }};
`;
