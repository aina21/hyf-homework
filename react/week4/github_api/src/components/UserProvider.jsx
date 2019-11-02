import React, { Component } from "react";
import * as API from "../api";

export const UserContext = React.createContext();

class UserProvider extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      userName: "aina21",
      isLoading: false
    };
  }

  async componentDidMount() {
    const response = await API.getUser(this.state.userName);
    const users = response.items.map((user, index) => {
      return { username: user.login, id: index };
    });
    this.setState({ users });
    console.log(users);
  }

  render() {
    return (
      <UserContext.Provider
        value={{
          state: this.state,
          userName: this.props.userName
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default UserProvider;
