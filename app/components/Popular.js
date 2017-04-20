var React = require('react');
var PropTypes = require('prop-types');

function SelectLanguage(props) {
  let languages = ['All', 'Ruby', 'JavaScript', 'Java', 'Python', 'CSS'];
  return (
    <ul className='languages'>
      { languages.map(lang => {
        return (
          <li
            style={lang === props.selectedLanguage ? { color: 'red' } : null }
            key={lang}
            onClick={props.onSelect.bind(null, lang)}>
            {lang}
          </li>
        )
      })}
    </ul>
  )
}

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}

class Popular extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedLanguage: 'All'
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }

  updateLanguage(lang) {
    this.setState(function() {
      return {
        selectedLanguage: lang
      }
    });
  }

  render() {
    return(
      <div>
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage} />
      </div>
    )
  }
}

module.exports = Popular;
