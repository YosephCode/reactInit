import React from 'react';
import GitHubUser from '../services/GitHubUser';

class SearchUser extends React.Component{
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(e){
    e.preventDefault();

    GitHubUser.getByUsername(this.refs.username.value).then((response) => {
      this.props.updateUser(response.data);
    });

    GitHubUser.getReposByUsername(this.refs.username.value).then((response) => {
      this.props.updateRepos(response.data);
    });
  }

  render(){
    return (
        <div className="jumbotron">
           <h1>GitHub Info</h1>
           <div className="row">
             <form className="col-xs-12" onSubmit={this.handleSubmit}>
               <div className="form-group">
                 <label>Username</label>
                 <input
                   type="text"
                   ref="username"
                   className="form-control"
                   placeholder="Ex: meu nome"
                   />
               </div>
               <button
                 type="submit"
                 className="btn btn-primary">Buscar
               </button>
             </form>
           </div>
        </div>
    );
  }
}

SearchUser.propType = {
  updateUser : React.PropTypes.func.isRequired,
  updateRepos: React.PropTypes.func.isRequired
};

module.exports = SearchUser;
