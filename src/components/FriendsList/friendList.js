import PropTypes from 'prop-types';
import { FriendsList } from './friendList.styled';
import { FriendListItem } from 'components/FriendListItem/friendListItem';

export const FriendList = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          isOnline={friend.isOnline}
          name={friend.name}
        />
      ))}
    </FriendsList>
  );
};
FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};
