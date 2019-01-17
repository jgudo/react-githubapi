import React from 'react';

const Repo = (props) => (
  <div>
    {props.repos.map((repo) => {
      return (
        <div key={repo.id}>
          <h4>{repo.name}</h4>
        </div>
      )
    })}
  </div>
);

export default Repo;