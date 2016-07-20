var React = require('react');
var GitHubUser = require('../services/GitHubUser');

var SearchUser = React.createClass({
  handleSubmit: function(e){
    var self = this;
    e.preventDefault();

    GitHubUser.getByUsername(this.refs.username.value).then(function(response){
      self.props.updateUser(response.data);
    });

    GitHubUser.getReposByUsername(this.refs.username.value).then(function(response){
      self.props.updateRepos(response.data);
    });
  },
  render: function(){
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
});

SearchUser.propType = {
  updateUser : React.PropTypes.func.isRequired,
  updateRepos: React.PropTypes.func.isRequired
};

module.exports = SearchUser;
