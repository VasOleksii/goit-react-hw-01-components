import PropTypes from 'prop-types';
import { FriendItemStyled, FriendStatus } from './FriendListItem.style';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendItemStyled>
      <FriendStatus className="status" status={isOnline}></FriendStatus>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
    </FriendItemStyled>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
