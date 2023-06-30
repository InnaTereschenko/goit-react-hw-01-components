import user from './Profile/user.json';
import Profile from './Profile/profile';

import Statistics from './Statistics/statistics';
import data from './Statistics/data.json';

import friends from './FriendList/friends.json';
import FriendList from './FriendList/friendList';

import transactions from './TransactionHistory/transactions.json';
import TransactionHistory from './TransactionHistory/transactionHistory';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
