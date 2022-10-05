import PropTypes from 'prop-types';
import { FriendsItem, Status, Name } from './friendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendsItem>
      <Status isOnline={isOnline}></Status>
      <img src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </FriendsItem>
  );
};
FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
