var React = require('react');
var Link = require('react-router-dom').Link;

class Home extends React.Component {
  render() {
    return (
      <div className='home-container'>
        <h1> Github Battle: Battle your friends... </h1>

        <Link className='button' to='/battle'>
          Battle
        </Link>

        <p className='about-info'>
          Created by @hienvd with guide from this<a href='https://online.reacttraining.com'> React Fundamental online course</a>
        </p>
      </div>
    )
  }
}

module.exports = Home;