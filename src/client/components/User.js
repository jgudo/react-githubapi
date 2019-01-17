import React from 'react';

const User = ({user}) => (
  <div>
      <div className="container">
        <div className="user">
        <img src={user.avatar_url} alt="" className="user-avatar"/>
        <p>Username: {user.login}</p>
        <p>Followers: {user.followers}</p>
        <p>Following: {user.following}</p>
        </div>
      </div>
  </div>
);

export default User;