import React from 'react';

import { getReposFromUser } from '../api';

let resourceSingleton;
function getResourceInstance(userId) {
  if (resourceSingleton) {
    return resourceSingleton;
  }
  resourceSingleton = getReposFromUser(userId);
  return resourceSingleton;
}

const UserRepo = props => {
  const { userId } = props;
  const resource = getResourceInstance(userId);
  const repos = resource.read();
  return (
    <div className="columns is-multiline">
      {repos.map(repo => (
        <div className="column is-3">
          <div className="card">
            <div className="card-content">
              <p className="title">{repo.name}</p>
              <span className="tag is-link">{repo.language}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserRepo;
