import React from 'react';

import UserRepo from './UserRepo';
import { getUserProfile } from '../api';

const resources = getUserProfile('MicroBenz');

const User = () => {
  const user = resources.read();
  return (
    <div className="container">
      <img src={user.avatar_url} alt={user.login} />
      <p>{user.name} (@{user.login})</p>
      <UserRepo userId="MicroBenz" />
    </div>
  )
};

export default User;
