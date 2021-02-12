import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' }

  onInputChange = event => {
    this.setState({ term: event.target.value})
  }

  onFormSubmit = event => {
    console.log(this.props);
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
  }

  render () {
    return (
      <div className="search-bar ui segment" style={{ marginTop: '15px' }}>
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Video Search</label>
            <input 
              type="text"
              placeholder="Type a word"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
        
      </div>
    );
  }
}

export default SearchBar;