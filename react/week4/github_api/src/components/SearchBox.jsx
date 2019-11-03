import React, { Component } from "react";
import { UserContext } from "./UserProvider";

export default class SearchBox extends Component {
  state = {
    searchText: ""
  };

  render() {
    return (
      <UserContext.Consumer>
        {value => {
          const handleSubmit = event => {
            event.preventDefault();
            const search = event.target.search.value.trim();

            value.action.findUsers(search);
            event.target.reset();
          };
          return (
            <form onSubmit={handleSubmit}>
              <input type="text" name="search" />
              <button type="submit">search</button>
            </form>
          );
        }}
      </UserContext.Consumer>
    );
  }
}
