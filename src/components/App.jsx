import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendsList/friendList';
import user from '../json/user';
import statData from '../json/data';
import friends from '../json/friends';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        margin: 30,
        gap: 50,
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <FriendList friends={friends} />
      <Statistics stats={statData} title="Upload stats" />
    </div>
  );
};
