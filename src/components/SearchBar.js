import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <h2 class="ui green header grey gry">
            <i class="image icon"></i>
            <div class="content">
              Image Search
            </div>
          </h2>
          <div className="ui action input" style={{ width: "88%" }}>
            <input
              className="prompt"
              type="text"
              placeholder="Search..."
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
            <button className="ui button sboxbutton">Search</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
