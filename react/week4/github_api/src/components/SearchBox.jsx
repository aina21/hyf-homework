import React, { Component } from "react";
import User from "./User";
import UserProvider from "./UserProvider";

export default class SearchBox extends Component {
  state = {
    searchText: ""
  };
  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    return (
        <input onChange={this.handleInput}></input>
    );
  }
}
