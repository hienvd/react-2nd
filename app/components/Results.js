var React = require('react');
var queryString = require('query-string');
var api = require('../utils/api');

class Results extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      winner: null,
      loser: null,
      error: null,
      loading: true
    }
  }

  componentDidMount () {
    let players = queryString.parse(this.props.location.search);

    api.battle([
      players.playerOneName,
      players.playerTwoName
    ]).then(function(aa) {
      console.log(aa);
    })
  }

  render() {
    let winner = this.state.winner;
    let loser = this.state.loser;
    let error = this.state.error;
    let loading = this.state.loading;

    if (loading === true) {
      return <p> Loading </p>
    }

    return (
      <p>Show results here!</p>
    )
  }
}

module.exports = Results;