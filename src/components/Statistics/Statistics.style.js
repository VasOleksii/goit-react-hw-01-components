import styled from 'styled-components';

export const StatSection = styled.section`
  margin: 0 auto;
  width: 250px;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 4px 8px;
  outline: 1px black;
`;

export const StatList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const StatItemStyled = styled.li`
  display: flex;
  flex-direction: column;
  flex-basis: 18%;
  padding: 3px;
  background-color: ${props => {
    return props.bgcolor;
  }};
`;
