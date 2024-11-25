import React from "react";
import User from './Profile/Profile';
import user from 'data/user.json';
import Statystics from "components/Statystics/Statystics";
import data from 'data/data.json';
import FriendList from 'components/Friends/Friends';
import friends from 'data/friends.json';
import TransactionHistory from 'components/Transactions/Transaction';
import transactions from 'data/transactions.json';


export const App = () => {
  return (
    <>
      <User
        username = {user.username}
        tag = {user.tag}
        location = {user.location}
        avatar = {user.avatar}
        stats = {user.stats}
      />
        <Statystics title = "Upload stats" stats={data} />
        {/* <Statistic stats = {data} /> */}
        <FriendList friends = {friends} />
        <TransactionHistory items = {transactions} />
    </>
  );
};
/*
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template
    </div>


*/
export default App;