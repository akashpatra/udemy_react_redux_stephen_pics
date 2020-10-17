import React from 'react';

class SearchBar extends React.Component {
  // Callback
  onInputChange(event) {
    console.log(event.target.value);
  }

  onInputClick() {
    console.log('Input was clicked');
  }

  state = { term: '' };

  // Use Arrow Function, so that this present in the function access correct reference
  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
              onClick={this.onInputClick}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
