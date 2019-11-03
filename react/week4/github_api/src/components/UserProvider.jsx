import React, { Component } from "react";
import * as API from "../api";

export const UserContext = React.createContext();

class UserProvider extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      isLoading: false,
      isEmpty: true
    };
  }

  findUsers = async (username = "aina21") => {
    this.setState({ isLoading: true });
    if (!username) {
      this.setState({ isEmpty: true, isLoading: false });
    } else {
      const response = await API.getUser(username);
      if (!response) {
        this.setState({ isEmpty: true });
      } else {
        const users = response.items.map((user, index) => {
          return { username: user.login, id: index };
        });
        this.setState({ users: users, isEmpty: false, isLoading: false });
      }
    }
  };

  componentDidMount() {
    this.findUsers();
  }

  render() {
    return (
      <UserContext.Provider
        value={{
          state: this.state,
          action: { findUsers: this.findUsers }
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default UserProvider;
