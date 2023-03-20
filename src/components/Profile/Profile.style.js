import styled from 'styled-components';

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 220px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 4px 8px;
  img {
    margin: 0 auto;
    width: 120px;
  }
`;

export const ProfileDescription = styled.div`
  text-align: center;
  font-weight: 500;
`;

export const ProfileStats = styled.ul`
  display: flex;
  justify-content: center;
  background-color: #97d6d8;
`;

export const ProfileStatsItem = styled.li`
  width: 100%;
  font-size: 12px;
  padding: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
