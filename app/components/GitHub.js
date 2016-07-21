import React from 'react';

/* Child components */
import SearchUser from './SearchUser.js';
import UserInfo from './UserInfo.js';

class GitHub extends React.Component{
  constructor(props) {
    super(props);
    this.updateUser = this.updateUser.bind(this);
    this.updateRepos = this.updateRepos.bind(this);
    this.state = {
      user: null,
      repos: []
    };
  }
  updateUser (user) {
    this.setState({user: user});
  }
  updateRepos (repos) {
    this.setState({repos: repos});
  }
  render() {
    return (
    <div className="container">
      <SearchUser
        updateUser={this.updateUser}
        updateRepos={this.updateRepos}
      />
      <UserInfo
        user={this.state.user}
        repos={this.state.repos}
      />
    </div>
    );
  }
}

export default GitHub;
