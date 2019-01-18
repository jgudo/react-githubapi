import React from 'react';

const Repo = (props) => (
  <div className="repo-wrapper">
    <h3>PUBLIC REPOS: {props.repos.length}</h3>
    <div className="repo-list">
      {props.repos.map((repo) => {
        return (
          <div key={repo.id} className="repo">
            <a href={repo.url} className="repo-link"><h1>{repo.name}</h1></a>
            <p>
              <span className="repo-info">Language: {repo.language}</span><br/>
              <span className="repo-info">Forks: {repo.forks}</span><br/>
              <span className="repo-info">Watchers: {repo.watchers}</span>
            </p>
          </div>
        )
      })}
    </div>
  </div>
);

export default Repo;