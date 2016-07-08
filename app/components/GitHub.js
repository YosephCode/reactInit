var React = require('react');

/* Child components */
var SearchUser = require('./SearchUser.js');

var GitHub = React.createClass({
  render: function() {
    return (
    <div className="container">
      <SearchUser />
    </div>
    );
  }
});

module.exports = GitHub;
