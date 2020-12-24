import axios from "axios";
import React from "react";
import SearchBar from "./Components/SearchBar";
import "./styles.css";

class App extends React.Component {
  onSearchSubmit(term) {
    axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID bQcIls2cUBgbuj9uuHx6z8hKR7GoTvUJSOTHsv44sPI"
      }
    });
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
      //onsubmit above is not a defined term can be names as anything
    );
  }
}

export default App;
