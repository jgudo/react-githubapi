import React, {Component} from 'react';
import axios, {CancelToken} from 'axios';
import {debounce} from 'lodash';

import User from './User';
import Repo from './Repo';

class App extends Component {
  state = {
    query: '',
    data: null,
    repos: null
  };

  getUser = debounce( async(username) => {
    if (this._cancelFetch) {
      this._cancelFetch.cancel();
    }
    this._cancelFetch = CancelToken.source();

    try {
      const user = await axios.get(`https://api.github.com/users/${username}`, {cancelToken: this._cancelFetch.token});
      const repos = await axios.get(`https://api.github.com/users/${username}/repos`);
      if(user) {
        this.setState(() => ({ data: user.data, repos: repos.data }));
      }
    } catch(e) {
      this.setState(() => ({ data: null, repos: null }));
    }
    
  }, 200);


  onInputChange = (e) => {
    let input = e.target.value;
    this.setState(() => ({query: input}));
    this.getUser(input);
  }

 render() {
  return (
    <div>
      <input type="text" onChange={this.onInputChange}/>
      {this.state.data ? (
        <React.Fragment>
          <User user={this.state.data}/>
          <div>Public Repos: {this.state.data.public_repos}</div>
          <Repo repos={this.state.repos}/>
        </React.Fragment>
      ): (
        <div>
          <p>No user found</p>
        </div>
      )}
    </div>
    
  ); 
 }
}

export default App;