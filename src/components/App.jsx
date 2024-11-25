import React from "react";
import User from './Profile/Profile';
import user from 'data/user.json';
import Statistic from "./Statistics/Statistics";
import data from 'data/data.json';
import Friend from 'components/Friends/Friends';
import friends from 'data/friends.json';
import Transaction from 'path/to/transactions.json';
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
        <Statistic title = "Upload stats" stats={data} />
        {/* <Statistic stats = {data} /> */}
        <Friend friends = {friends} />
        <Transaction items = {transactions} />
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