import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendsList/friendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import user from '../json/user';
import statData from '../json/data';
import friends from '../json/friends';
import transactions from '../json/transactions';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        margin: 50,
        gap: 100,
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
      <TransactionHistory items={transactions} />
    </div>
  );
};
