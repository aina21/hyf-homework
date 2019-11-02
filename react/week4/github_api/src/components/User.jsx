import React, { Component } from "react";
import { UserContext } from "./UserProvider";

class User extends Component {
  render() {
    return (
      <div>
        <UserContext.Consumer>
          {value => (
            <ul>
              {value.state.users.map(user => (
                <li key={user.id}>{user.username}</li>
              ))}
            </ul>
          )}
        </UserContext.Consumer>
      </div>
    );
  }
}

export default User;
